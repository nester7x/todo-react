import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ onChange, value, type, errorText, ...rest }) => (
  <>
    <S.InputStyled {...rest} type={type} onChange={onChange} value={value} />
    {errorText && <S.Error>{errorText}</S.Error>}
  </>
);

Input.defaultProps = {
  value: null,
  type: 'text'
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  errorText: PropTypes.string.isRequired
};

export default Input;
