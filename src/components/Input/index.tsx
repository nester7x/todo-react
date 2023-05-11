import React, { FC } from 'react';

import * as S from './styles';

type InputProps = {
  name: string;
  type: string;
  inputProps?: object;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorText?: string;
  inputStyles?: React.CSSProperties;
};

const Input: FC<InputProps> = ({
  name,
  onChange,
  value,
  type,
  errorText,
  placeholder,
  inputStyles,
}) => (
  <>
    <S.InputStyled
      style={inputStyles}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
    {errorText && <S.Error>{errorText}</S.Error>}
  </>
);

export default Input;
