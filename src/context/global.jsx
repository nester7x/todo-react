import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCookie } from '../utils/CookieUtils';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setLogin(true);
    }
  }, []);

  return <Provider value={{ isLogin, setLogin }}>{children}</Provider>;
};

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
