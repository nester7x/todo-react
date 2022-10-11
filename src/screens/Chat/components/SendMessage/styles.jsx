import styled from 'styled-components';
import Button from 'components/Button';

export const Wrapper = styled.form`
  margin: 20px;
  display: flex;
  align-items: flex-end;
`;

export const SendBtn = styled(Button)`
  && {
    background-color: #1976d2;
    width: 100%;
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    :hover {
      background-color: #1976d2;
      opacity: 0.8;
    }
  }
`;
