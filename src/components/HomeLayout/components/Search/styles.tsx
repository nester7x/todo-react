import styled from 'styled-components';
import Input from 'components/Input';

export const SearchInput = styled(Input)`
  && {
    width: 100%;
    font-size: 20px;
    line-height: 71%;
    padding: 18px 25px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: none;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  background: blue;
  width: 36px;
  height: 36px;
`
