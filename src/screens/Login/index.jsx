import React, { useContext, useState } from 'react';

import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

const Login = () => {
  const { login } = useContext(AuthContext);

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

      const loginRequest = await login('auth/signin', loginData);
      if (loginRequest.message || loginRequest.error) {
        await setError(() => ({
          message:
            loginRequest.message ||
            loginRequest.error ||
            'Something went wrong',
          isShow: true
        }));
      }
      await loginRequest();
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
