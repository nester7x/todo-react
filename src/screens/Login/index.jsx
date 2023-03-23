import React, { useContext, useState } from 'react';

import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

const Login = () => {
  const { auth, loginState } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

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
      await auth('auth/signin', loginData);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Preloader />;

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleLogin}>
        <S.ErrorMessage error={!!loginState.errors}>
          {loginState.errors}
        </S.ErrorMessage>
        <S.DataInput
          name="username"
          value={loginData.username}
          onChange={handleDataChange}
          placeholder="Username"
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
