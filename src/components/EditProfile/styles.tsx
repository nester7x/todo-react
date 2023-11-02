import styled from 'styled-components';
import Textarea from '@mui/joy/Textarea';

import Button from 'components/Button';
import Input from 'components/Input';

export const Wrapper = styled.form`
  background-color: #e1e1e1;
  border-radius: 20px;
  padding: 15px 25px;
  margin: 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Username = styled.p`
  font-size: 24px;
  line-height: 71%;
  color: #202124;
`;

export const InfoItem = styled.div`
  line-height: 71%;
  flex: 1;
`;

export const InfoName = styled.span`
  display: inline-block;
  color: #8d8d8d;
  font-size: 14px;
  margin: 0 0 6px 10px;
`;

export const EditInput = styled(Input)`
  && {
    border-radius: 10px;
    padding: 10px;
    color: #202124;
    width: 100%;
    font-size: 16px;
    line-height: 71%;
    background-color: #f5f5f5;
    --Input-focusedInset: var(--any);
    --Input-focusedHighlight: rgba(13, 110, 253, 0.25);
    :before {
      transition: box-shadow 0.15s ease-in-out;
    }
    :focus-within {
      border-color: #2758d6 !important;
    }
  }
`;

export const DescriptionArea = styled(Textarea)`
  && {
    background-color: #f5f5f5;
    padding: 10px;
    width: 100%;
    --Textarea-focusedInset: var(--any);
    --Textarea-focusedHighlight: rgba(13, 110, 253, 0.25);
    &::before {
      transition: box-shadow 0.15s ease-in-out;
    }
    &:focus-within {
      border-color: #2758d6;
    }
    textarea {
      padding-right: 4px;
      font-size: 14px;
      line-height: 100%;
      overflow-y: scroll;
    }
  }
`;

export const SaveBtn = styled(Button)`
  && {
    width: fit-content;
    font-size: 16px;
    line-height: 71%;
    text-transform: capitalize;
    padding: 10px;
    border: 1px solid #2758d6;
    background-color: #ffffff;
    color: #202124;
    border-radius: 25px;
    transition: 0.2s;
    margin-left: auto;
    &:hover {
      background-color: #2758d6;
      color: #ffffff;
      border: 1px solid transparent;
    }
  }
`;
