import styled from 'styled-components';
import Textarea from '@mui/joy/Textarea';

import Input from '../Input';
import Button from '../Button';

export const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const Profile = styled.div`
  background-color: #e1e1e1;
  border-radius: 25px;
  padding: 15px 25px;
  display: flex;
`;

export const ImgWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 250px;
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

export const Buttons = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 0 0 15px;
`;

export const Username = styled.p`
  font-size: 20px;
  line-height: 71%;
  color: #202124;
  margin: 0 0 25px;
`;

export const Info = styled.div`
  font-size: 16px;
  line-height: 71%;
  color: #8d8d8d;
  margin: 0 0 15px;
`;

export const InfoName = styled.span`
  display: inline-block;
  min-width: 15%;
  text-align: right;
  text-transform: capitalize;
`;

export const InfoValue = styled.span``;

export const EditInput = styled(Input)`
  && {
    padding: 5px 10px;
    width: 75%;
    font-size: 16px;
    line-height: 71%;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
`;

export const SubTitle = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 71%;
  color: #8d8d8d;
  margin: 0 0 7px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  border-radius: 25px;
  padding: 25px 10px;
  background-color: #f5f5f5;
`;

export const DescriptionArea = styled(Textarea)`
  && {
    margin: 0 0 15px;
    --Textarea-focusedInset: var(--any);
    --Textarea-focusedThickness: '0.25rem';
    --Textarea-focusedHighlight: rgba(13, 110, 253, 0.25);
    &::before {
      transition: box-shadow 0.15s ease-in-out;
    }
    &:focus-within {
      border-color: transparent;
    }
  }
`;

export const Btn = styled(Button)`
  && {
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
