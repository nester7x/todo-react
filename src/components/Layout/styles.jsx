import styled from 'styled-components';

import Btn from 'components/Button';

const ASIDE_WIDTH = 65;
const ASIDE_WIDTH_OPEN = 200;
const HEADER_HEIGHT = 41.6;

export const Wrapper = styled.div`
  padding-left: ${({ open }) => (open ? ASIDE_WIDTH_OPEN : ASIDE_WIDTH)}px;
  position: relative;
  overflow-y: auto;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: rgb(200, 100, 100);
  padding: 10px;
`;

export const Title = styled.p`
  text-align: center;
  color: #fff;
`;

export const LogOut = styled(Btn)`
  background-color: transparent;
  color: #551a8b;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px;
  width: ${({ open }) => (open ? ASIDE_WIDTH_OPEN : ASIDE_WIDTH)}px;
  background-color: #fff;
  color: #29627e;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: #ccc;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

export const ToggleButton = styled(Btn)`
  margin: 0 0 20px 0;
  background-color: transparent;
  width: 20px;
  height: 20px;
  position: relative;
  padding: 0;
  ::after,
  ::before,
  span {
    position: absolute;
    left: 0;
    content: '';
    background-color: #000;
    width: 100%;
    height: 2px;
  }
  span {
    bottom: 2px;
  }
  ::after {
    height: 3px;
    top: 4px;
  }
  ::before {
    height: 3px;
    top: 10px;
  }
`;
