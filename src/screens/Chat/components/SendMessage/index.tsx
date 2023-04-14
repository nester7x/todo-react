import React, { FC, useContext, useState } from 'react';

import CKEditor from 'components/CKEditor';
import { GlobalContext } from 'context/global';
import { api } from 'utils/apiUtils';

import * as S from './styles';

type SendMessageProps = {
  chatId: string | number;
  getConversation: () => void;
};

const SendMessage: FC<SendMessageProps> = ({ chatId, getConversation }) => {
  const { user } = useContext(GlobalContext);

  const [messageValue, setMessageValue] = useState<string>('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>, editor: any): void => {
    const data = editor.getData();
    setMessageValue(data);
  };

  const sendMessage = async () => {
    const data = await api.post('message', {
      from: user?.userInfo?.id.toString(),
      to: chatId,
      message: messageValue,
    });

    await getConversation();
    await setMessageValue('');
    return data;
  };

  return (
    <S.Wrapper>
      <CKEditor data={messageValue} onChange={handleInputChange} placeholder='Write a message...' />
      <S.SendBtn onClick={sendMessage} disabled={!messageValue}>
        Send
      </S.SendBtn>
    </S.Wrapper>
  );
};

export default SendMessage;
