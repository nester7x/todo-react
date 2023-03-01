import React, { useState } from 'react';

import { getCookie, setCookie } from 'utils/CookieUtils';
import { httpPost } from 'api/base.api';
import Preloader from 'components/Preloader';

import * as S from './styles';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    message: '',
    isShow: false
  });

  const isDisabled = () => {
    let res = false;
    Object.values(loginData).forEach((value) => {
      if (!value) {
        res = true;
      }
    });
    return res;
  };

  const handleDataChange = (event) => {
    const { target } = event;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const data = await httpPost('auth/signin', loginData);
      if (data.accessToken !== null) {
        await setCookie('token', data.accessToken, 1);
        await setCookie('refreshToken', data.refreshToken, 1);
      }
      if (getCookie('token')) {
        const currentUrl = location.href;
        location.href = currentUrl;
      } else {
        setError(() => ({
          message: data.message || 'Something went wrong',
          isShow: true
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Preloader />;

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleLogin}>
        <S.ErrorMessage error={error.isShow}>{error.message}</S.ErrorMessage>
        <S.DataInput
          name="username"
          value={loginData.username}
          onChange={handleDataChange}
          placeholder="Email"
        />
        <S.DataInput
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleDataChange}
          placeholder="Password"
        />
        <S.LoginBtn type="submit" disabled={isDisabled()}>
          Submit
        </S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Login;
