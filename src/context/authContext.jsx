import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { deleteCookie, getCookie, setCookie } from 'utils/CookieUtils';
import { api } from 'utils/apiUtils';

export const AuthContext = createContext();

const { Provider } = AuthContext;

export const GlobalAuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null
  });

  const login = async (endpoint, loginData) => {
    const data = await api.post(`${endpoint}`, loginData);

    if (data.accessToken) {
      await setCookie('token', data.accessToken, 1);
      await setCookie('refreshToken', data.refreshToken, 1);
      await setLoginState({
        isLoggedIn: true,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });
    }

    return data;
  };

  const logout = async () => {
    await deleteCookie('token', '/');
    await deleteCookie('refreshToken', '/');
    await setLoginState({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
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
        refreshToken
      }));
    }

    if (loginState.isLoggedIn) {
      setCookie('token', loginState.accessToken, 1);
      setCookie('refreshToken', loginState.refreshToken, 1);
    }
  }, []);

  return <Provider value={{ loginState, login, logout }}>{children}</Provider>;
};

GlobalAuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
