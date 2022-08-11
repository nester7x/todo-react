import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  height: 80vh;
`;

export const Info = styled.div`
  background-color: transparent;
  border-radius: 20px;
  padding: 22px 30px;
`;

export const Error = styled.h3`
  font-size: 200px;
  line-height: 150px;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const Message = styled.p`
  font-size: 60px;
  line-height: 56px;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
`;

export const Btn = styled(NavLink)`
  display: block;
  width: max-content;
  margin: 0 auto;
  background-color: #394252;
  padding: 15px 20px;
  border-radius: 20px;
  transition: 0.2s;
  color: #ffffff;
  :hover {
    opacity: 0.8;
  }
`;
