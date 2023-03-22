import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { deleteCookie, getCookie, setCookie } from 'utils/CookieUtils';
import { api } from 'utils/apiUtils';

export const AuthContext = createContext();

const { Provider } = AuthContext;

export const GlobalAuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    roles: []
  });

  const [loginState, setLoginState] = useState({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    errors: ''
  });

  const auth = async (endpoint, loginData) => {
    const data = await api.post(`${endpoint}`, loginData);

    if (data.accessToken) {
      await setCookie('token', data.accessToken, 1);
      await setCookie('refreshToken', data.refreshToken, 1);

      await setLoginState({
        isLoggedIn: true,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        errors: ''
      });

      await setUser((prevState) => ({
        ...prevState,
        id: data.id,
        username: data.username,
        email: data.email,
        roles: [...prevState.roles, ...data.roles]
      }));
    }

    if (data.message || data.error) {
      await setLoginState({
        isLoggedIn: false,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        errors: data.message || data.error
      });
    }
  };

  const logout = async () => {
    await deleteCookie('token', '/');
    await deleteCookie('refreshToken', '/');
    await setLoginState({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
      errors: ''
    });
  };

  useEffect(() => {
    const accessToken = getCookie('token');
    const refreshToken = getCookie('refreshToken');

    if (accessToken && refreshToken) {
      setLoginState((prevState) => ({
        ...prevState,
        isLoggedIn: true,
        accessToken,
        refreshToken,
        errors: ''
      }));
    }

    if (loginState.isLoggedIn) {
      setCookie('token', loginState.accessToken, 1);
      setCookie('refreshToken', loginState.refreshToken, 1);
    }
  }, []);

  useEffect(() => {
    (async () => {
      let isUserInfo = true;
      Object.keys(user).map((value) => {
        if (user[value].length === 0) isUserInfo = false;
      });
      if (loginState.accessToken && !isUserInfo) {
        const userInfo = await api.get('user', loginState.accessToken);

        await setUser((prevState) => ({
          ...prevState,
          id: userInfo.id,
          username: userInfo.username,
          email: userInfo.email,
          roles: [...prevState.roles]
        }));
      }
    })();
  }, [loginState]);

  return (
    <Provider value={{ user, loginState, auth, logout }}>{children}</Provider>
  );
};

GlobalAuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
