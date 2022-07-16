import React, { useState } from 'react';
import { setCookie } from 'utils/CookieUtils';
import * as S from './styles';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleDataChange = (event) => {
    const { target } = event;
    setRegistrationData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const login = async () => {
    const response = await fetch(
      'https://nestbe.herokuapp.com/api/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(registrationData)
      }
    );

    const data = await response.json();
    setCookie('token', data.user.token, 1);
    window.location.reload();
  };

  const handleRegistration = async (event) => {
    try {
      event.preventDefault();

      const response = await fetch('https://nestbe.herokuapp.com/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) await login();
    } catch (e) {
      setError(`${e}`);
    }
  };

  return (
    <S.Wrap>
      <S.DataForm onSubmit={handleRegistration}>
        <S.ErrorMessage>{error}</S.ErrorMessage>
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
