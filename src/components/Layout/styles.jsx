import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

import Btn from 'components/Button';

const HEADER_HEIGHT = 48;

export const Wrapper = styled.div`
  background-color: #1d2a9f;
  padding-left: 44px;
  position: relative;
  overflow-y: auto;
`;

export const Main = styled(Container)`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 15px 0;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #262473;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const LogOut = styled(Btn)`
  && {
    background-color: transparent;
    color: #551a8b;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
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
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  svg {
    fill: #000000;
  }
  svg:hover {
    opacity: 0.7;
  }
`;
