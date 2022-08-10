import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

const HEADER_HEIGHT = 48;

export const Wrapper = styled.div`
  background-color: #cccccc;
  position: relative;
  overflow-y: auto;
`;

export const Main = styled(Container)`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 15}px 0 15px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #394252;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
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
`;

export const LogOut = styled.a`
  && {
    cursor: pointer;
    margin: 0 10px;
    svg {
      fill: #ffffff;
    }
    svg:hover {
      opacity: 0.7;
    }
  }
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px;
  background-color: #b1b1b1;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.ul`
  display: flex;
  margin-right: -10px;
`;

export const Link = styled(NavLink)`
  margin: 0 10px;
  svg {
    fill: #ffffff;
  }
  svg:hover {
    opacity: 0.7;
  }
`;
