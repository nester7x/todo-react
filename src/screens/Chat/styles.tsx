import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

import { device } from 'utils/mediaQueries';

export const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  background-color: #394252;
  height: 85vh;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262a33;
`;

export const ChatBody = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93%;
  width: 70%;
  overflow-x: hidden;
  @media screen and ${device.tablet} {
    width: 100%;
    &.open {
      pointer-events: none;
      opacity: 0.8;
    }
  }
`;

export const Receiver = styled.p`
  text-align: center;
  width: 70%;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: #262a33;
  padding: 10px;
  @media screen and ${device.tablet} {
    width: 100%;
  }
`;

export const EmptyReceiver = styled.p`
  color: #ffffff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and ${device.tablet} {
    width: 100%;
  }
`;

export const Contacts = styled.p`
  font-size: 14px;
  padding: 10px;
  text-align: center;
  width: 30%;
  color: #ffffff;
  background-color: #262a33;
  @media screen and ${device.tablet} {
    display: none;
  }
`;

export const MenuBurger = styled(MenuIcon)`
  && {
    cursor: pointer;
    margin: 10px;
    z-index: 100;
    display: none;
    @media screen and ${device.tablet} {
      display: block;
    }
    @media screen and ${device.mobileL} {
      margin: 5px 0 5px 10px;
    }
  }
`;
