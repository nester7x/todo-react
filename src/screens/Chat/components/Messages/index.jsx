import React, { useEffect, useState } from 'react';
import { getCookie } from 'utils/CookieUtils';
import { httpGet } from 'api/base.api';
import Message from '../Message';
import * as S from './styles';

const Messages = () => {
  const [messages, setMessages] = useState({
    items: []
  });

  useEffect(() => {
    const showData = async () => {
      const data = await httpGet('conversation', getCookie('token'));
      await setMessages(data);
    };

    showData();
  }, []);

  return (
    <S.Messages>
      {messages.items.length === 0 ? (
        <S.EmptyMessage>Nothing Here</S.EmptyMessage>
      ) : (
        messages.items.map((item) => (
          <Message
            key={item.id}
            createdDate={item.createdDate}
            from={item.from}
            id={item.id}
            message={item.message}
          />
        ))
      )}
    </S.Messages>
  );
};

export default Messages;
