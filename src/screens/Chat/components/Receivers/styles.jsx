import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 30%;
`;

export const Receivers = styled.div`
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

export const Contacts = styled.p`
  font-size: 14px;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  background-color: #262a33;
`;
