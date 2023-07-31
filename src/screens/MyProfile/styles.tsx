import styled from 'styled-components';

import Button from 'components/Button';

// TODO: buttons in header and buttons of components are not the same
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
