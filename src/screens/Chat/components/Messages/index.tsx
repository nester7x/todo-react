import React, { FC, useContext } from 'react';

import { AuthContext } from 'context/authContext';
import Message from '../Message';

import * as S from './styles';

type MessagesProps = {
  messages: Message[];
};

const Messages: FC<MessagesProps> = ({ messages }) => {
  const { user } = useContext(AuthContext);

  return (
    <S.Messages>
      {messages?.length === 0 ? (
        <S.EmptyMessage>Nothing here...</S.EmptyMessage>
      ) : (
        messages?.map((item, index) => (
          <Message
            key={item?.id || index}
            style={
              item?.sender?.id === user?.id?.toString()
                ? {
                    border: '1px solid #1976d2',
                    backgroundColor: '#1976d2',
                    marginLeft: 'auto',
                  }
                : {}
            }
            message={item}
          />
        ))
      )}
    </S.Messages>
  );
};

export default Messages;
