import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { httpGet } from 'api/base.api';
import { getCookie } from '../utils/CookieUtils';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: {},
    isLogin: false
  });

  useEffect(() => {
    const putData = async () => {
      const token = getCookie('token');

      if (token) {
        const data = await httpGet(`me`, token);
        setUser((prevState) => ({
          ...prevState,
          userInfo: data?.user,
          isLogin: true
        }));
      }
    };

    putData();
  }, []);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
