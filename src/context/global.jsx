import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { httpGet, httpPost } from 'api/base.api';
import { getCookie, setCookie } from 'utils/CookieUtils';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: {},
    isLogin: false
  });

  useEffect(() => {
    const getUser = async () => {
      const token = getCookie('token');

      let data;
      if (token !== null) {
        data = await httpGet('test/user', token);
      }

      if (token && !data.message) {
        setUser((prevState) => ({
          ...prevState,
          userInfo: data,
          isLogin: true
        }));
      } else if (token && data.message) {
        const refreshToken = getCookie('refreshToken');
        const newAccessToken = await httpPost('auth/refreshtoken', {
          refreshToken: `${refreshToken}`
        });
        await setCookie('token', newAccessToken.accessToken, 1);
        const newToken = getCookie('token');
        const newData = await httpGet('test/user', newToken);
        setUser((prevState) => ({
          ...prevState,
          userInfo: newData,
          isLogin: true
        }));
      }
    };

    getUser();
  }, []);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
