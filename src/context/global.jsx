import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { httpGet } from 'api/base.api';
import { getCookie } from 'utils/CookieUtils';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: {},
    isLogin: false
  });

  const [receiver, setReceiver] = useState({
    receiverId: '',
    items: []
  });

  useEffect(() => {
    const getUser = async () => {
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

    getUser();
  }, []);

  useEffect(() => {
    if (receiver.receiverId) {
      const getConversation = async () => {
        const data = await httpGet(
          `conversation?with=${receiver.receiverId}`,
          getCookie('token')
        );
        await setReceiver(data);
      };

      getConversation();
    }
  }, [receiver.receiverId]);

  return (
    <Provider value={{ user, setUser, receiver, setReceiver }}>
      {children}
    </Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
