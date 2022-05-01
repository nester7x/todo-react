import styled from 'styled-components';

import Btn from "../../components/Button";

export const Wrap = styled.div`
  background-color: #ccc;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: purple;
  margin: 0 0 10px 0;
`;

export const ChangeBtn = styled(Btn)`
  margin: 0 0 10px 0;
  :hover {
    opacity: .8;
  }
`;

export const Tr = styled.tr`
  cursor: pointer;
  transition: .1s;
  :hover {
    background-color: rgba(111,111,111,.1);
  }
`;

export const Td = styled.td`
  padding: 5px 15px 5px 0;
`;