import React, { FC, useContext, useState } from 'react';

import TextArea from 'components/TextArea';
import { AuthContext } from '../../../../context/authContext';
import socket from '../../../../utils/socket';
import Button from 'components/Button';

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
    <form className='mx-5 mb-5 flex max-tablet:mx-[10px] max-tablet:mb-[10px]'>
      <TextArea data={messageValue} onChange={handleInputChange} placeholder='Write a message...' />
      <Button
        onClick={handleSendMessage}
        disabled={!messageValue}
        text='Send'
        type='submit'
        className='mt-auto bg-[#1976d2] w-[20%] px-[15px] py-[10px] rounded-[0_5px_5px_0] hover:bg-[#1976d2] hover:opacity-80'
      />
    </form>
  );
};

export default SendMessage;
