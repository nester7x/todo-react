import React, { useEffect, useState, useContext, FC } from 'react';

import { validate } from 'utils/loginValidation';
import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

type RegistrationData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string;
};

type InputError = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type IsDirty = {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
};

const Registration: FC = () => {
  const { auth, loginState } = useContext(AuthContext);

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [inputError, setInputError] = useState<InputError>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isDirty, setIsDirty] = useState<IsDirty>({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setRegistrationData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  useEffect(() => {
    Object.keys(inputError).forEach((key) => {
      setInputError((prev) => ({
        ...prev,
        [key]: validate(key, registrationData[key], registrationData),
      }));
    });
  }, [registrationData]);

  const handleRegistration = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      await auth('auth/signup', registrationData);
    } finally {
      setIsLoading(false);
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;
    Object.keys(isDirty).forEach(() => {
      setIsDirty((prev) => ({
        ...prev,
        [target.name]: true,
      }));
    });
  };

  if (isLoading) return <Preloader />;

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleRegistration}>
        <S.ErrorMessage onError={loginState.errors ? () => true : undefined}>
          {loginState.errors}
        </S.ErrorMessage>
        <S.DataInput
          name='username'
          type='text'
          inputProps={{ maxLength: 20 }}
          value={registrationData.username}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder='Full Name'
          errorText={isDirty.username && inputError.username ? inputError.username : ''}
        />
        <S.DataInput
          name='email'
          type='email'
          inputProps={{ maxLength: 40 }}
          value={registrationData.email}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder='Email'
          errorText={isDirty.email && inputError.email ? inputError.email : ''}
        />
        <S.DataInput
          name='password'
          type='password'
          inputProps={{ maxLength: 30 }}
          value={registrationData.password}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder='Password'
          errorText={isDirty.password && inputError.password ? inputError.password : ''}
        />
        <S.DataInput
          name='confirmPassword'
          type='password'
          inputProps={{ maxLength: 30 }}
          value={registrationData.confirmPassword}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder='Confirm Password'
          errorText={
            isDirty.confirmPassword && inputError.confirmPassword ? inputError.confirmPassword : ''
          }
        />
        <S.LoginBtn type='submit' disabled={Object.values(inputError).join('') !== ''}>
          Submit
        </S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Registration;
