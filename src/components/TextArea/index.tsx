import React from 'react';
import styled from 'styled-components';

const Textarea = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  resize: none;
  font-size: 14px;
  color: #333333;
  max-height: 100px;
  outline: none;
  width: 300px;
`;

type EditorProps = {
  data: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const TextArea = ({ data, onChange, placeholder }: EditorProps): JSX.Element => (
  <Textarea
    value={data}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder || 'Type something...'}
  />
);

export default TextArea;
