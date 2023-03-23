import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'utils/apiUtils';
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
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropDown = async (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  const getConversation = async () => {
    const data = await api.get(`conversation?with=${id}`, getCookie('token'));
    await setReceiver((prevState) => ({
      ...prevState,
      conversation: data.items
    }));
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const user = await api.get(`user/${id}`, getCookie('token'));
        const conversation = await api.get(
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
      <S.ChatHeader>
        <S.MenuBurger
          ref={btnRef}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
        <S.Contacts>Contacts</S.Contacts>
        <S.Receiver>{receiver.receiverName}</S.Receiver>
      </S.ChatHeader>
      <S.ChatBody>
        <Receivers className={isOpen ? 'open' : 'closed'} />
        {id ? (
          <S.Chat className={isOpen ? 'open' : 'closed'}>
            <Messages conversation={receiver.conversation} />
            <SendMessage
              chatId={id.toString()}
              getConversation={getConversation}
            />
          </S.Chat>
        ) : (
          <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
        )}
      </S.ChatBody>
    </S.Wrapper>
  );
};

export default Chat;
