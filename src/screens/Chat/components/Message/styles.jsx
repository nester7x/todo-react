import styled from 'styled-components';

import { mediaQueries } from 'utils/MediaQueries';

export const Message = styled.div`
  border: 1px solid #ffffff;
  width: 40%;
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 10px;
  ${mediaQueries.laptop} {
    width: 45%;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  ${mediaQueries.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  margin-right: 10px;
  color: #ffffff;
  ${mediaQueries.tabletS} {
    font-size: 12px;
  }
  ${mediaQueries.mobileL} {
    margin-bottom: 2px;
  }
`;

export const Date = styled.p`
  color: #ffffff;
  font-size: 12px;
  opacity: 0.6;
  ${mediaQueries.tabletS} {
    font-size: 10px;
  }
`;

export const Content = styled.p`
  color: #ffffff;
  word-break: break-word;
  ${mediaQueries.tabletS} {
    font-size: 10px;
  }
`;
