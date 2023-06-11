import React, { FC } from 'react';

import * as S from './styles';

type BtnProps = {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  text: string;
  disabled: boolean;
};

const Btn: FC<BtnProps> = ({ onClick, type = 'button', text, disabled = false, ...rest }) => (
  <S.BtnStyled {...rest} onClick={onClick} type={type} disabled={disabled}>
    {text}
  </S.BtnStyled>
);

export default Btn;
