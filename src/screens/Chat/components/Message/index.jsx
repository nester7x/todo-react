import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Message = ({ id, from, createdDate, message }) => (
  <S.Message key={id}>
    <S.InfoWrap>
      <S.Name>{from}</S.Name>
      <S.Date>{createdDate}</S.Date>
    </S.InfoWrap>
    <S.Content>{message}</S.Content>
  </S.Message>
);

Message.propTypes = {
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
