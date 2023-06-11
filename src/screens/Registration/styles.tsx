import styled from 'styled-components';

import Btn from 'components/Button';
import Input from 'components/Input';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DataForm = styled.form`
  border-radius: 20px;
  padding: 28px 29px;
  width: 475px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  display: ${({ onError }) => (onError ? 'block' : 'none')};
  margin: 0 auto 20px;
  color: #ff3523;
  text-align: center;
  font-size: 18px;
`;

export const Title = styled.h5`
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #202124;
  margin: 0 0 25px;
`;

export const DataInput = styled(Input)`
  && {
    position: relative;
    margin: 0 0 25px !important;
  }
`;

export const LoginBtn = styled(Btn)`
  && {
    margin: 0 0 10px;
  }
`;

export const Question = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #202124;
`;

export const SubBtn = styled(NavLink)`
  text-decoration-line: underline;
  color: #202124;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
