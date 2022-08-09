import styled from 'styled-components';
import Button from '@mui/material/Button';

export default styled(Button)`
  && {
    background: #252383;
    color: #ffffff;
    text-transform: uppercase;
    padding: 10px 23px;
    :hover {
      box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
  }
`;
