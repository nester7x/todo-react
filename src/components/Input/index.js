import React from 'react';

import InputStyled from './styles'

const Input = ({ onChange, value, type }) => <InputStyled type={type} onChange={onChange} value={value} />;

Input.defaultProps = {
    onChange: () => {},
    value: null,
    type: 'text'
}

export default Input;