import React from 'react';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import * as S from './styles';

const Chat = () => (
  <S.Chat>
    <Messages />
    <SendMessage />
  </S.Chat>
);

export default Chat;
