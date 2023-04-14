import React, { FC, useContext, useState } from 'react';

import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

type LoginData = {
  username: string;
  password: string;
};

const Login: FC = () => {
  const { auth, loginState } = useContext(AuthContext);

  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
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
      await auth('auth/signin', loginData);
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
        <S.DataInput
          name='username'
          type='text'
          value={loginData.username}
          onChange={handleDataChange}
          placeholder='Username'
        />
        <S.DataInput
          name='password'
          type='password'
          value={loginData.password}
          onChange={handleDataChange}
          placeholder='Password'
        />
        <S.LoginBtn type='submit' disabled={isDisabled()}>
          Submit
        </S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Login;
