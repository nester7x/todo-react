import React, { FC, useContext, useState } from 'react';

import TextArea from 'components/TextArea';
import { AuthContext } from '../../../../context/authContext';
import socket from '../../../../utils/socket';

import * as S from './styles';

type SendMessageProps = {
  roomId: string;
};

const SendMessage: FC<SendMessageProps> = ({ roomId }) => {
  const { user } = useContext(AuthContext);

  const [messageValue, setMessageValue] = useState<string>('');

  const handleInputChange = (value: string): void => {
    setMessageValue(value);
  };

  const handleSendMessage = async () => {
    socket.emit('send-message', {
      roomId,
      senderId: user.id,
      body: messageValue,
    });

    setMessageValue('');
  };

  return (
    <S.Wrapper>
      <TextArea data={messageValue} onChange={handleInputChange} placeholder='Write a message...' />
      <S.SendBtn onClick={handleSendMessage} disabled={!messageValue} text='Send' type='submit' />
    </S.Wrapper>
  );
};

export default SendMessage;
