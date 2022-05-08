import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: #ccc;
  min-height: 100vh;
  padding: 0 15px;
`;

export const Title = styled.h1`
  color: purple;
  margin: 0 0 10px 0;
`;

export const Tr = styled.tr`
  cursor: pointer;
  transition: 0.1s;
  :hover {
    background-color: rgba(111, 111, 111, 0.1);
  }
`;

export const Td = styled.td`
  padding: 5px 15px 5px 0;
`;
