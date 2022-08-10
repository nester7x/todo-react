import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Table from 'components/Table';

export const StyledTable = styled(Table)`
  display: block;
  height: 88vh;
  overflow-y: scroll;
  width: max-content;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Link = styled(NavLink)`
  color: #ffffff;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
