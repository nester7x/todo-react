import React, { FC, useContext, useState } from 'react';

import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

type LoginData = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const { auth, loginState } = useContext(AuthContext);

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = (): boolean => {
    let res = false;
    Object.values(loginData).forEach((value) => {
      if (!value) {
        res = true;
      }
    });
    return res;
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      await auth('auth/login', loginData);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Preloader />;

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleLogin}>
        <S.ErrorMessage onError={loginState.errors ? () => true : undefined}>
          {loginState.errors}
        </S.ErrorMessage>
        <S.Title>LOGIN</S.Title>
        <S.DataInput
          name='email'
          type='text'
          value={loginData.email}
          onChange={handleDataChange}
          placeholder='Email'
        />
        <S.DataInput
          name='password'
          type='password'
          value={loginData.password}
          onChange={handleDataChange}
          placeholder='Password'
        />
        <S.LoginBtn type='submit' text='Submit' disabled={isDisabled()} />
        <S.Question>
          Need an account? <S.SubBtn to='/registration'>REGISTRATION</S.SubBtn>
        </S.Question>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Login;
