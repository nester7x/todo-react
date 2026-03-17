import React, { createContext, FC, useEffect, useState } from 'react';

import { deleteCookie, getCookie, setCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';
import { UserProps } from 'types/userTypes';
import { PostProps } from 'types/postTypes';

type LoginState = {
  isLoggedIn: boolean;
  token: string | null;
  errors: string | boolean;
};

type User = {
  userInfo: UserProps;
  userPosts: PostProps[];
};

type AuthContextType = {
  user: User;
  loginState: LoginState;
  auth: (endpoint: string, loginData: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  update: (updatedUserInfo: UserProps) => Promise<void>;
};

type GlobalAuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const { Provider } = AuthContext;

export const GlobalAuthProvider: FC<GlobalAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    userInfo: {
      id: '',
      username: '',
      email: '',
      activity: '',
      city: '',
      country: '',
      age: 0,
      description: '',
      image: '',
      errors: '',
    },
    userPosts: [],
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

  const update = async (updatedUserInfo: UserProps) => {
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
      let isUserInfo = true;
      Object.keys(user?.userInfo).map((value) => {
        if (!user?.userInfo[value].length) isUserInfo = false;
      });

      if (loginState.token && !isUserInfo) {
        const data = await api.get('users/me', loginState.token);

         setUser((prevState) => ({
          ...prevState,
          userInfo: {
            id: data.user._id,
            username: data.user.username,
            email: data.user.email,
            activity: data.user.activity,
            city: data.user.city,
            country: data.user.country,
            age: data.user.age,
            description: data.user.description,
            image: data.user.image,
          },
          userPosts: data.posts,
        }));
      }
    })();
  }, [loginState]);

  return <Provider value={{ user, loginState, auth, logout, update }}>{children}</Provider>;
};
