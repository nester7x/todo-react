import React, { createContext, FC, useEffect, useState } from 'react';

import { deleteCookie, getCookie, setCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';

type User = {
  id: string;
  username: string;
  email: string;
  roles: string[];
  [key: string]: any;
};

type LoginState = {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  errors: string | boolean;
};

type AuthContextType = {
  user: User;
  loginState: LoginState;
  auth: (endpoint: string, loginData: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

type GlobalAuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const { Provider } = AuthContext;

export const GlobalAuthProvider: FC<GlobalAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    email: '',
    roles: [],
  });

  const [loginState, setLoginState] = useState<LoginState>({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    errors: '',
  });

  const auth = async (endpoint: string, loginData: { username: string; password: string }) => {
    const data = await api.post(`${endpoint}`, loginData);

    if (data.accessToken) {
      await setCookie('token', data.accessToken, 1);
      await setCookie('refreshToken', data.refreshToken, 1);

      await setLoginState({
        isLoggedIn: true,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        errors: '',
      });

      await setUser((prevState) => ({
        ...prevState,
        id: data.id,
        username: data.username,
        email: data.email,
        roles: [...prevState.roles, ...data.roles],
      }));
    }

    if (data.message || data.error) {
      await setLoginState({
        isLoggedIn: false,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        errors: data.message || data.error,
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
      errors: '',
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
        errors: '',
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
        const data = await api.get('user', loginState.accessToken);

        let userInfo: User;
        if (loginState.accessToken && !data.message) {
          userInfo = data;
        } else if (loginState.accessToken && data.message) {
          const refreshToken = getCookie('refreshToken');
          const newAccessToken = await api.post('auth/refreshtoken', {
            refreshToken: `${refreshToken}`,
          });
          await setCookie('token', newAccessToken.accessToken, 1);
          userInfo = await api.get('user', newAccessToken.accessToken);
        }

        await setUser((prevState) => ({
          ...prevState,
          id: userInfo.id,
          username: userInfo.username,
          email: userInfo.email,
          roles: [...prevState.roles],
        }));
      }
    })();
  }, [loginState]);

  return <Provider value={{ user, loginState, auth, logout }}>{children}</Provider>;
};
