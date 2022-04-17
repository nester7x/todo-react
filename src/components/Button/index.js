import React from 'react';

import BtnStyled from './styles';

const Btn = ({onClick, type, text}) => <BtnStyled onClick={onClick} type={type}>{ text }</BtnStyled>;

Btn.defaultProps = {
    onClick: () => {},
    type: 'button',
    text: 'Btn'
}

export default Btn;