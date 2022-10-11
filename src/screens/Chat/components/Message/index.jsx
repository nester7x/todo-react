import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { convertingDate } from 'utils/ConvertingDate';
import * as S from './styles';

const Message = ({ id, from, createdDate, message, ...rest }) => (
  <S.Message key={id} {...rest}>
    <S.InfoWrap>
      <S.Name>{from}</S.Name>
      <S.Date>{convertingDate(createdDate)}</S.Date>
    </S.InfoWrap>
    <S.Content>{parse(message)}</S.Content>
  </S.Message>
);

Message.propTypes = {
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
