import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import * as S from './styles';
import Receivers from './components/Receivers';
import { httpGet } from '../../api/base.api';
import { getCookie } from '../../utils/CookieUtils';

const Chat = () => {
  const { id } = useParams();
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await httpGet(`user/${id}`, getCookie('token'));
      await setReceiver(data.user.username);
    };

    getData();
  }, [id]);

  return (
    <S.Wrapper>
      <Receivers />
      {id ? (
        <S.Chat>
          <S.Receiver>{receiver}</S.Receiver>
          <Messages />
          <SendMessage id={id} />
        </S.Chat>
      ) : (
        <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
      )}
    </S.Wrapper>
  );
};

export default Chat;
