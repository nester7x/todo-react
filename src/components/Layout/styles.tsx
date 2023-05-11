import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

import { device } from 'utils/mediaQueries';

export const Wrapper = styled.div`
  background-color: #cccccc;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const Main = styled.main`
  overflow-y: auto;
  height: calc(100% - 50px);
  padding: 15px 0 15px;
  width: 100%;
`;

export const MainContainer = styled(Container)`
  height: 100%;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;
  background-color: #394252;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
  @media screen and ${device.mobileL} {
    padding: 8px 0;
  }
`;

export const HeaderInner = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #ffffff;
  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const LogOut = styled.a`
  && {
    display: flex;
    cursor: pointer;
    margin: 0 10px;
    svg {
      fill: #ffffff;
    }
    svg:hover {
      opacity: 0.7;
    }
    @media screen and ${device.mobileL} {
      margin: 0 8px;
      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -10px;
  @media screen and ${device.mobileL} {
    margin-right: -8px;
  }
`;

export const MenuItem = styled.li``;

export const Link = styled(NavLink)`
  margin: 0 10px;
  display: flex;
  svg {
    fill: #ffffff;
  }
  svg:hover {
    opacity: 0.7;
  }
  @media screen and ${device.mobileL} {
    margin: 0 8px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
