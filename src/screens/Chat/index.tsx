import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContext, ChatProvider } from './context/chatContext';

import Messages from './components/Messages';
import SendMessage from './components/SendMessage';
import Receivers from './components/Receivers';

import * as S from './styles';
const ChatInner: FC = () => {
  const { messages, getMessages } = useContext(ChatContext);

  const { id } = useParams<{ id: string }>();
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

  useEffect(() => {
    if (id) {
      getMessages(id);
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
        {/* <S.Receiver>{receiver.receiverName}</S.Receiver>*/}
      </S.ChatHeader>
      <S.ChatBody>
        <Receivers className={isOpen ? 'open' : 'closed'} />
        {id ? (
          <S.Chat className={isOpen ? 'open' : 'closed'}>
            <Messages messages={messages} />
            <SendMessage roomId={id} />
          </S.Chat>
        ) : (
          <S.EmptyReceiver>Choose a receiver</S.EmptyReceiver>
        )}
      </S.ChatBody>
    </S.Wrapper>
  );
};

const Chat: FC = () => (
  <ChatProvider>
    <ChatInner />
  </ChatProvider>
);

export default Chat;
