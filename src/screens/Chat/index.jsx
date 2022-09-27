import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'context/global';
import { useParams } from 'react-router-dom';
import { httpGet } from 'api/base.api';
import { getCookie } from 'utils/CookieUtils';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import * as S from './styles';
import Receivers from './components/Receivers';

const Chat = () => {
  const { setReceiver } = useContext(GlobalContext);

  const { id } = useParams();
  const [receiverName, setReceiverName] = useState('');

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const data = await httpGet(`user/${id}`, getCookie('token'));
        await setReceiverName(data.user.username);
      };
      setReceiver((prevState) => ({
        ...prevState,
        receiverId: id
      }));

      getData();
    }
  }, [id]);

  return (
    <S.Wrapper>
      <Receivers />
      {id ? (
        <S.Chat>
          <S.Receiver>{receiverName}</S.Receiver>
          <Messages />
          <SendMessage chatId={id.toString()} />
        </S.Chat>
      ) : (
        <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
      )}
    </S.Wrapper>
  );
};

export default Chat;
