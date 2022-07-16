import React, { useState } from 'react';
import { setCookie } from 'utils/CookieUtils';
import * as S from './styles';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleDataChange = (event) => {
    const { target } = event;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      const response = await fetch(
        'https://nestbe.herokuapp.com/api/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(loginData)
        }
      );

      const data = await response.json();
      setCookie('token', data.user.token, 1);
      window.location.reload();
    } catch (e) {
      setError(`${e}`);
    }
  };

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleLogin}>
        <S.ErrorMessage>{error}</S.ErrorMessage>
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
