import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  background-color: #394252;
  height: 85vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

export const Receiver = styled.p`
  margin: 0 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: #262a33;
  padding: 10px;
`;

export const EmptyReceiver = styled.p`
  color: #ffffff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
