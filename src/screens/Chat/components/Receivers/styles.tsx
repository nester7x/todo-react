import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from 'utils/mediaQueries';

export const Wrapper = styled.div`
  width: 30%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  background-color: #313946;
  padding: 0 0 40px;
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
    && {
      position: absolute;
      top: 0;
      right: 100%;
      width: 0;
      height: 100%;
      transition: 0.2s;
      opacity: 0;
      z-index: 105;
      &.open {
        width: 60%;
        transform: translateX(100%);
        opacity: 1;
      }
    }
  }
`;

export const Receiver = styled(NavLink)`
  display: block;
  font-size: 12px;
  padding: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
