import React, { useState } from 'react';
import { setCookie } from 'utils/CookieUtils';
import { httpPost } from 'api/base.api';
import * as S from './styles';
import Preloader from '../../components/Preloader';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    message: '',
    isShow: false
  });

  const handleDataChange = (event) => {
    const { target } = event;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      await setIsLoading((prevState) => !prevState);
      const data = await httpPost('user/login', loginData);
      await setCookie('token', data.user.token, 1);
      await window.location.reload();
    } catch (e) {
      setError(() => ({
        message: e.toString(),
        isShow: true
      }));
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
          name="email"
          value={loginData.email}
          onChange={handleDataChange}
          placeholder="email..."
        />
        <S.DataInput
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleDataChange}
          placeholder="password..."
        />
        <S.LoginBtn type="submit">Login</S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Login;
