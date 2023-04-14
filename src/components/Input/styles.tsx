import styled from 'styled-components';
import Input from '@mui/material/Input';

export const InputStyled = styled(Input)`
  && {
    background-color: #ffffff;
    padding: 10px 15px;
    input {
      padding: 0;
    }
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: #ff3523;
`;
