import React, { useEffect, useState } from 'react';
import { setCookie } from 'utils/CookieUtils';
import { validate } from 'utils/LoginValidation';
import { httpPost } from 'api/base.api';
import Preloader from 'components/Preloader';
import * as S from './styles';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const [requestError, setRequestError] = useState({
    message: '',
    isShow: false
  });

  const [inputError, setInputError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isDirty, setIsDirty] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleDataChange = (event) => {
    const { target } = event;
    setRegistrationData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const login = async () => {
    const data = await httpPost('user/login', registrationData);
    setCookie('token', data.user.token, 1);
    window.location.reload();
  };

  useEffect(() => {
    Object.keys(inputError).forEach((key) => {
      setInputError((prev) => ({
        ...prev,
        [key]: validate(key, registrationData[key], registrationData)
      }));
    });
  }, [inputError]);

  const handleRegistration = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await httpPost('user', registrationData);
      if (!response.errors) await login();
      else
        setRequestError(() => ({
          message:
            'username' in response.errors
              ? response.errors.username
              : 'Something went wrong',
          isShow: true
        }));
    } finally {
      setIsLoading(false);
    }
  };

  const blurHandler = (e) => {
    const { target } = e;
    Object.keys(isDirty).forEach(() => {
      setIsDirty((prev) => ({
        ...prev,
        [target.name]: true
      }));
    });
  };

  if (isLoading) return <Preloader />;

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleRegistration}>
        <S.ErrorMessage error={requestError.isShow}>
          {requestError.message}
        </S.ErrorMessage>
        <S.DataInput
          name="username"
          type="text"
          inputProps={{ maxLength: 20 }}
          value={registrationData.username}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder="Full Name"
          errorText={isDirty.username && inputError.username}
        />
        <S.DataInput
          name="email"
          type="email"
          inputProps={{ maxLength: 40 }}
          value={registrationData.email}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder="Email"
          errorText={isDirty.email && inputError.email}
        />
        <S.DataInput
          name="password"
          type="password"
          inputProps={{ maxLength: 30 }}
          value={registrationData.password}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder="Password"
          errorText={isDirty.password && inputError.password}
        />
        <S.DataInput
          name="confirmPassword"
          type="password"
          inputProps={{ maxLength: 30 }}
          value={registrationData.confirmPassword}
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder="Confirm Password"
          errorText={isDirty.confirmPassword && inputError.confirmPassword}
        />
        <S.LoginBtn
          type="submit"
          disabled={Object.values(inputError).join('') !== ''}
        >
          Submit
        </S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Registration;
