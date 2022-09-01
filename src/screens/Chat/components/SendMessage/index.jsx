import React, { useContext, useState } from 'react';
import { GlobalContext } from 'context/global';
import { getCookie } from 'utils/CookieUtils';
import { httpPost } from 'api/base.api';
import * as S from './styles';

const SendMessage = (id) => {
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
        to: `${id}`,
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
      <S.MessageInput
        onChange={handleInputChange}
        value={messageValue}
        placeholder="Write a message..."
      />
      <S.SendBtn onClick={sendMessage} disabled={!messageValue}>
        Send
      </S.SendBtn>
    </S.SendWrap>
  );
};

export default SendMessage;
