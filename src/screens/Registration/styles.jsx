import styled from 'styled-components';
import Btn from 'components/Button';
import Input from 'components/Input';

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DataForm = styled.form`
  background-color: #394252;
  border-radius: 20px;
  padding: 28px 29px;
  max-width: 250px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled.p`
  display: ${({ error }) => (error ? 'block' : 'none')};
  margin: 0 auto 20px;
  color: #ff3523;
  text-align: center;
  font-size: 18px;
`;

export const Error = styled.p`
  font-size: 12px;
  color: #ff3523;
`;

export const DataInput = styled(Input)`
  && {
    padding: 4px 6px;
    border-bottom: 1px solid #ffffff;
    background: transparent;
    width: 100%;
    color: #ffffff;
    margin: 0 0 10px;
    :before {
      border-bottom: 1px solid transparent;
    }
    :after {
      border-bottom: 1px solid #394252;
    }
    :hover:before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
    }
  }
`;

export const LoginBtn = styled(Btn)`
  && {
    margin: 19px 0 0;
    background: rgba(255, 255, 255, 0.36) !important;
    border-radius: 0;
    width: 100%;
    transition: 0.3s;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
