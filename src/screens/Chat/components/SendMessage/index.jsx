import React, { useContext, useState } from 'react';
import * as S from './styles';
import { GlobalContext } from '../../../../context/global';
import { getCookie } from '../../../../utils/CookieUtils';
import { httpPost } from '../../../../api/base.api';

const SendMessage = () => {
  const { user } = useContext(GlobalContext);

  const [messageValue, setMessageValue] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    setMessageValue(target.value);
  };

  const sendMessage = async () => {
    const token = getCookie('token');

    const data = await httpPost(
      'message',
      {
        from: user?.userInfo?.email,
        to:
          user?.userInfo?.email === 'qwerty@gmail.com'
            ? 'qwerty@gmail.com'
            : 'qwerty@gmail.com',
        message: messageValue
      },
      {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    );
    await setMessageValue('');
    return data;
  };

  return (
    <S.SendWrap>
      <S.MessageInput onChange={handleInputChange} value={messageValue} />
      <S.SendBtn onClick={sendMessage}>Send</S.SendBtn>
    </S.SendWrap>
  );
};

export default SendMessage;
