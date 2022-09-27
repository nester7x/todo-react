import styled from 'styled-components';

export const Messages = styled.div`
  padding: 20px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 30px;
  margin: 0 auto;
  color: #ffffff;
`;
