import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Receivers = styled.div`
  border-radius: 5px;
  background-color: #394252;
  padding: 25px;
  height: 85vh;
  overflow-y: auto;
  width: 20%;
`;

export const Receiver = styled.div`
  color: #ffffff;
`;

export const Chat = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  background-color: #394252;
  padding: 25px;
  height: 85vh;
  overflow-y: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
`;
