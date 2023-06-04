import React, { useEffect, useState, useContext, FC } from 'react';

import { validate } from 'utils/loginValidation';
import Preloader from 'components/Preloader';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

type RegistrationData = {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
  [key: string]: string;
};

type InputError = {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
};

type IsDirty = {
  email: boolean;
  password: boolean;
  fullName: boolean;
  confirmPassword: boolean;
};

const Registration: FC = () => {
  const { auth, loginState } = useContext(AuthContext);

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [inputError, setInputError] = useState<InputError>({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });

  const [isDirty, setIsDirty] = useState<IsDirty>({
    email: false,
    password: false,
    fullName: false,
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
      await auth('auth/register', registrationData);
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
        <S.Title>REGISTRATION</S.Title>
        <S.DataInput
          name='fullName'
          type='text'
          inputProps={{ maxLength: 30 }}
          value={registrationData.fullName}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder='Full Name'
          errorText={isDirty.fullName && inputError.fullName ? inputError.fullName : ''}
        />
        <S.DataInput
          name='email'
          type='email'
          inputProps={{ maxLength: 50 }}
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
          placeholder='Confirm password'
          errorText={
            isDirty.confirmPassword && inputError.confirmPassword ? inputError.confirmPassword : ''
          }
        />
        <S.LoginBtn
          type='submit'
          text='Submit'
          disabled={Object.values(inputError).join('') !== ''}
        />
        <S.Question>
          Already a user? <S.SubBtn to='/login'>LOGIN</S.SubBtn>
        </S.Question>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Registration;
