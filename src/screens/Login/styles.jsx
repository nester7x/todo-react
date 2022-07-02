import styled from 'styled-components';
import Btn from 'components/Button';
import Input from 'components/Input';

export const Wrap = styled.div`
  background-color: #2148c0;
  padding: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DataForm = styled.form`
  width: 250px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled.p`
  margin: 0 auto 20px;
  color: red;
  font-size: 18px;
`;

export const DataInput = styled(Input)`
  padding: 10px 15px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background: transparent;
  width: 100%;
  color: #ffffff;
  margin: 0 0 10px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const LoginBtn = styled(Btn)`
  color: #264eca;
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  width: 100%;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

export const MessageWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2148c0;
  padding: 15px;
  font-size: 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;
