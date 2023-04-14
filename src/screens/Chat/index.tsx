import React, { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';
import Receivers from './components/Receivers';

import * as S from './styles';

type Receiver = {
  receiverId: number | string;
  receiverName: string;
  conversation: [];
};

const Chat: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [receiver, setReceiver] = useState<Receiver>({
    receiverId: '',
    receiverName: '',
    conversation: [],
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const closeDropDown = (e: any): void => {
      if (e.path && e.path[0] !== btnRef.current) {
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
      conversation: data.items,
    }));
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const user = await api.get(`user/${id}`, getCookie('token'));
        const conversation = await api.get(`conversation?with=${id}`, getCookie('token'));
        await setReceiver((prevState) => ({
          ...prevState,
          receiverId: id,
          receiverName: user.user.username,
          conversation: conversation.items,
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
            <SendMessage chatId={id} getConversation={getConversation} />
          </S.Chat>
        ) : (
          <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
        )}
      </S.ChatBody>
    </S.Wrapper>
  );
};

export default Chat;
