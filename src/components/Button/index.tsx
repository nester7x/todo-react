import React, { FC } from 'react';

import BtnStyled from './styles';

type BtnProps = {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  text: string;
  disabled: boolean;
};

const Btn: FC<BtnProps> = ({ onClick, type = 'button', text, disabled = false, ...rest }) => (
  <BtnStyled {...rest} onClick={onClick} type={type} disabled={disabled}>
    {text}
  </BtnStyled>
);

export default Btn;
