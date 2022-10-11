import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpGet } from 'api/base.api';
import { getCookie } from 'utils/CookieUtils';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';
import Receivers from './components/Receivers';

import * as S from './styles';

const Chat = () => {
  const { id } = useParams();
  const [receiver, setReceiver] = useState({
    receiverId: '',
    receiverName: '',
    conversation: []
  });

  const getConversation = async () => {
    const data = await httpGet(`conversation?with=${id}`, getCookie('token'));
    await setReceiver((prevState) => ({
      ...prevState,
      conversation: data.items
    }));
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const user = await httpGet(`user/${id}`, getCookie('token'));
        const conversation = await httpGet(
          `conversation?with=${id}`,
          getCookie('token')
        );
        await setReceiver((prevState) => ({
          ...prevState,
          receiverId: id,
          receiverName: user.user.username,
          conversation: conversation.items
        }));
      })();
    }
  }, [id]);

  return (
    <S.Wrapper>
      <Receivers />
      {id ? (
        <S.Chat>
          <S.Receiver>{receiver.receiverName}</S.Receiver>
          <Messages conversation={receiver.conversation} />
          <SendMessage
            chatId={id.toString()}
            getConversation={getConversation}
          />
        </S.Chat>
      ) : (
        <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
      )}
    </S.Wrapper>
  );
};

export default Chat;
