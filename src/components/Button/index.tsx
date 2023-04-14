import React, { FC, ReactNode } from 'react';

import BtnStyled from './styles';

type BtnProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  children: ReactNode;
  disabled?: boolean;
};

const Btn: FC<BtnProps> = ({ onClick, type, children, ...rest }) => (
  <BtnStyled {...rest} onClick={onClick} type={type}>
    {children}
  </BtnStyled>
);

export default Btn;
