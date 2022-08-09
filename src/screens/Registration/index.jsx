import React, { useState } from 'react';
import { setCookie } from 'utils/CookieUtils';
import { httpPost } from '../../api/base.api';
import * as S from './styles';
import Preloader from '../../components/Preloader';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
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
    setRegistrationData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const login = async () => {
    const data = await httpPost('user/login', registrationData);
    setCookie('token', data.user.token, 1);
    window.location.reload();
  };

  const handleRegistration = async (event) => {
    try {
      event.preventDefault();
      await setIsLoading((prevState) => !prevState);
      const response = await httpPost('user', registrationData);
      if (!response.errors) await login();
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
      <S.DataForm onSubmit={handleRegistration}>
        <S.ErrorMessage error={error.isShow}>{error.message}</S.ErrorMessage>
        <S.DataInput
          name="username"
          value={registrationData.username}
          onChange={handleDataChange}
          placeholder="username..."
        />
        <S.DataInput
          name="email"
          value={registrationData.email}
          onChange={handleDataChange}
          placeholder="email..."
        />
        <S.DataInput
          name="password"
          type="password"
          value={registrationData.password}
          onChange={handleDataChange}
          placeholder="password..."
        />
        <S.LoginBtn type="submit">Registration</S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );
};

export default Registration;
