import React, { FC } from 'react';

import { Message } from '../../../../types/messageTypes';
import moment from 'moment';

import * as S from './styles';

type MessageProps = {
  message: Message;
  style?: React.CSSProperties;
};

const Message: FC<MessageProps> = ({ message, ...rest }) => (
  <S.Message style={rest.style}>
    <S.InfoWrap>
      <S.Name>{message?.sender?.username}</S.Name>
      <S.Date>{moment(message?.createdAt).calendar()}</S.Date>
    </S.InfoWrap>
    <S.Content>{message?.body}</S.Content>
  </S.Message>
);

export default Message;
