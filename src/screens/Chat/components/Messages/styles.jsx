import styled from 'styled-components';

import { device } from 'utils/MediaQueries';

export const Messages = styled.div`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 0 20px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }
  @media screen and ${device.tablet} {
    margin: 0 0 10px;
    padding: 10px 10px 0;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 30px;
  margin: 0 auto;
  color: #ffffff;
`;
