import styled from 'styled-components';
import Input from '@mui/material/Input';

export const InputStyled = styled(Input)`
  && {
    font-family: inherit;
    background-color: #e1e1e1;
    border-radius: 100px;
    padding: 7px 19px 6px;
    width: 100%;
    font-size: 30px;
    line-height: 37px;
    color: #8d8d8d;
    input {
      padding: 0;
    }
    :before {
      border-bottom: 1px solid transparent;
    }
    :after {
      border-bottom: 1px solid transparent;
    }
    :hover:before {
      border-bottom: 1px solid transparent !important;
    }
  }
`;

export const Error = styled.p`
  margin: -26px 0 8px;
  font-size: 14px;
  color: #ff3523;
`;
