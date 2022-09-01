import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';

export const SendWrap = styled.div`
  display: flex;
  margin: 20px;
`;

export const MessageInput = styled(Input)`
  && {
    border-radius: 5px 0 0 5px;
    width: 85%;
  }
`;

export const SendBtn = styled(Button)`
  && {
    background-color: #1976d2;
    width: 15%;
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    :hover {
      background-color: #1976d2;
      opacity: 0.8;
    }
  }
`;
