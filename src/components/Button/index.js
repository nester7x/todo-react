import React from 'react';

import BtnStyled from './styles';

const Btn = ({onClick, type, children, ...rest}) => <BtnStyled {...rest} onClick={onClick} type={type}>{ children }</BtnStyled>;

Btn.defaultProps = {
    onClick: () => {},
    type: 'button',
    text: 'Btn'
}

export default Btn;