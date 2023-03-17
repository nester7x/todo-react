import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { api } from 'utils/apiUtils';
import { getCookie, setCookie } from 'utils/CookieUtils';
import { AuthContext } from './authContext';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => {
  const { loginState } = useContext(AuthContext);

  const [user, setUser] = useState({
    userInfo: {}
  });

  useEffect(() => {
    if (loginState.isLoggedIn) {
      (async () => {
        const token = getCookie('token');

        let data;
        if (token !== null) {
          data = await api.get('user', token);
        }

        let userInfo;
        if (token && !data.message) {
          userInfo = data;
        } else if (token && data.message) {
          const refreshToken = getCookie('refreshToken');
          const newAccessToken = await api.post('auth/refreshtoken', {
            refreshToken: `${refreshToken}`
          });
          await setCookie('token', newAccessToken.accessToken, 1);
          const newToken = getCookie('token');
          userInfo = await api.get('user', newToken);
        }

        if (userInfo) {
          setUser((prevState) => ({
            ...prevState,
            userInfo
          }));
        }
      })();
    }
  }, [loginState]);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
