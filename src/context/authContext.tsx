import React, { createContext, FC, useEffect, useState } from 'react';

import { deleteCookie, getCookie, setCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';

type User = {
  id: string;
  username: string;
  email: string;
  [key: string]: any;
};

type LoginState = {
  isLoggedIn: boolean;
  token: string | null;
  errors: string | boolean;
};

type AuthContextType = {
  user: User;
  loginState: LoginState;
  auth: (endpoint: string, loginData: { email: string; password: string }) => Promise<void>;
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
  });

  const [loginState, setLoginState] = useState<LoginState>({
    isLoggedIn: false,
    token: null,
    errors: '',
  });

  const auth = async (endpoint: string, loginData: { email: string; password: string }) => {
    const data = await api.post(`${endpoint}`, loginData);

    if (data.token) {
      await setCookie('token', data.token, 1);

      await setLoginState({
        isLoggedIn: true,
        token: data.token,
        errors: '',
      });

      await setUser((prevState) => ({
        ...prevState,
        id: data.id,
        username: data.username,
        email: data.email,
      }));
    }

    if (data[0]?.msg || data.message) {
      await setLoginState({
        isLoggedIn: false,
        token: data.token,
        errors: data[0]?.msg || data.message,
      });
    }
  };

  const logout = async () => {
    await deleteCookie('token', '/');
    await setLoginState({
      isLoggedIn: false,
      token: null,
      errors: '',
    });
  };

  useEffect(() => {
    const token = getCookie('token');

    if (token) {
      setLoginState((prevState) => ({
        ...prevState,
        isLoggedIn: true,
        token,
        errors: '',
      }));
    }

    if (loginState.isLoggedIn) {
      setCookie('token', loginState.token, 1);
    }
  }, []);

  useEffect(() => {
    (async () => {
      let isUserInfo = true;
      Object.keys(user).map((value) => {
        if (user[value].length === 0) isUserInfo = false;
      });
      if (loginState.token && !isUserInfo) {
        const data = await api.get('auth/me', loginState.token);

        await setUser((prevState) => ({
          ...prevState,
          id: data._id,
          username: data.fullName,
          email: data.email,
        }));
      }
    })();
  }, [loginState]);

  return <Provider value={{ user, loginState, auth, logout }}>{children}</Provider>;
};
