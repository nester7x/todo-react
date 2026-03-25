import React, { createContext, FC, useEffect, useState } from 'react';

import { deleteCookie, getCookie, setCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';
import { User } from 'types/userTypes';

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
  update: (updatedUserInfo: User) => Promise<void>;
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
    city: '',
    country: '',
    age: 0,
    description: '',
    image: '',
  });

  const [loginState, setLoginState] = useState<LoginState>({
    isLoggedIn: false,
    token: null,
    errors: '',
  });

  const auth = async (endpoint: string, loginData: { email: string; password: string }) => {
    const data = await api.post(`${endpoint}`, loginData);

    if (data?.token) {
      setCookie('token', data.token, 1);

      setLoginState({
        isLoggedIn: true,
        token: data.token,
        errors: '',
      });

      setUser((prevState) => ({
        ...prevState,
        userInfo: {
          id: data.id,
          username: data.username,
          email: data.email,
          activity: data.activity,
          city: data.city,
          country: data.country,
          age: data.age,
          description: data.description,
          image: data.image,
        },
      }));
    }

    if (data[0]?.msg || data.message) {
      setLoginState({
        isLoggedIn: false,
        token: data?.token,
        errors: data[0]?.msg || data.message,
      });
    }
  };

  const logout = async () => {
    deleteCookie('token', '/');
    setLoginState({
      isLoggedIn: false,
      token: null,
      errors: '',
    });
  };

  const update = async (updatedUserInfo: User) => {
    const response = await api.patch('users/me', updatedUserInfo, getCookie('token'));

    if (!response.message) {
      setUser((prevState) => ({
        ...prevState,
        userInfo: {
          id: response.id,
          username: response.username,
          email: response.email,
          activity: response.activity,
          city: response.city,
          country: response.country,
          age: response.age,
          description: response.description,
          image: response.image,
        },
      }));
    }

    // TODO: handle errors
    if (response.message) {
      setUser((prevState) => ({
        ...prevState,
        errors: response.message,
      }));
    }
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
      if (loginState.token) {
        const data = await api.get('users/me', loginState.token);

        setUser((prevState) => ({
          ...prevState,
          id: data?.id,
          username: data?.username,
          email: data?.email,
          activity: data?.activity,
          city: data?.city,
          country: data?.country,
          age: data?.age,
          description: data?.description,
          image: data?.image,
        }));
      }
    })();
  }, [loginState]);

  return <Provider value={{ user, loginState, auth, logout, update }}>{children}</Provider>;
};
