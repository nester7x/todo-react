import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button';

export const Wrapper = styled.div`
  background-color: #e1e1e1;
  border-radius: 25px;
  padding: 15px 25px;
  display: flex;
  align-items: stretch;
  gap: 15px;
  margin: 0 0 15px;
`;

export const Preview = styled.div`
  flex: 1;
`;

export const ImgWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #78ef76;
  border-radius: 25px;
  margin: 0 0 15px;
`;

export const Img = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  object-fit: cover;
`;

export const EditBtn = styled(Button)`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 71%;
    text-transform: capitalize;
    padding: 10px;
    border: 1px solid #2758d6;
    background-color: #ffffff;
    color: #202124;
    border-radius: 25px;
    transition: 0.2s;
    margin: 0 auto;
    &:hover {
      background-color: #2758d6;
      color: #ffffff;
      border: 1px solid transparent;
    }
  }
`;

export const ChatBtn = styled(NavLink)`
  && {
    display: inline-block;
    text-align: center;
    font-weight: 500;
    width: 100%;
    font-size: 16px;
    line-height: 71%;
    text-transform: capitalize;
    padding: 10px;
    border: 1px solid #2758d6;
    background-color: #ffffff;
    color: #202124;
    border-radius: 25px;
    transition: 0.2s;
    margin: 0 auto;
    &:hover {
      background-color: #2758d6;
      color: #ffffff;
      border: 1px solid transparent;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  flex: 2;
`;

export const Username = styled.p`
  font-size: 24px;
  line-height: 71%;
  color: #202124;
`;

export const AdditionalInfo = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  line-height: 71%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 75%;
    width: 1px;
    background-color: #8d8d8d;
    opacity: 0.4;
  }
  &:last-child:after {
    display: none;
  }
`;

export const InfoName = styled.span`
  color: #8d8d8d;
  font-size: 14px;
  margin: 0 0 10px;
`;

export const InfoValue = styled.span`
  color: #202124;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  border-radius: 25px;
  background-color: #f5f5f5;
`;
