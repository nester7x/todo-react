import React, { useEffect, useState } from 'react';
import * as S from './styles';

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === '') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

let initialToken;
let submitted;

if (getCookie('token') === '' || getCookie('token') === 'null') {
  initialToken = null;
  submitted = false;
} else {
  initialToken = getCookie('token');
  submitted = true;
}

const Login = () => {
  const [token, setToken] = useState(initialToken);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(submitted);
  const [error, setError] = useState('');

  useEffect(() => {
    if (token !== null) {
      setIsSubmitted(true);
    }

    document.cookie = `token=${token}; expires=${new Date()}; path=/`;
  }, [token]);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const getToken = async (user) => {
    const response = await fetch(
      'https://nestbe.herokuapp.com/api/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      }
    );
    if (!response.ok) {
      setError('Wrong login or password...');
    }

    const data = await response.json();
    return data.user.token;
  };

  const checkData = (event) => {
    event.preventDefault();

    getToken({
      email: `${emailValue}`,
      password: `${passwordValue}`
    }).then((value) => setToken(value));
  };

  const renderForm = (
    <S.Wrap>
      <S.DataForm>
        <S.ErrorMessage>{error}</S.ErrorMessage>
        <S.DataInput
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="email..."
        />
        <S.DataInput
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder="password..."
        />
        <S.LoginBtn type="submit" onClick={checkData}>
          Login
        </S.LoginBtn>
      </S.DataForm>
    </S.Wrap>
  );

  return (
    <div>
      {isSubmitted ? (
        <S.Wrap>
          <S.MessageWrapper>Authorized successfully</S.MessageWrapper>
        </S.Wrap>
      ) : (
        renderForm
      )}
    </div>
  );
};

export default Login;
