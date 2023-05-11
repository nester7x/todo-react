import React, { FC } from 'react';
import parse from 'html-react-parser';

import { convertingDate } from 'utils/convertingDate';
import * as S from './styles';

type MessageProps = {
  id: number;
  from: string[];
  createdDate: string;
  message: string;
  style?: React.CSSProperties;
};

const Message: FC<MessageProps> = ({ id, from, createdDate, message, ...rest }) => (
  <S.Message key={id} style={rest.style}>
    <S.InfoWrap>
      <S.Name>{from}</S.Name>
      <S.Date>{convertingDate(createdDate)}</S.Date>
    </S.InfoWrap>
    <S.Content>{parse(message)}</S.Content>
  </S.Message>
);

export default Message;
