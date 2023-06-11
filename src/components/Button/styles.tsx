import styled from 'styled-components';
import Button from '@mui/material/Button';

import { device } from 'utils/mediaQueries';

export const BtnStyled = styled(Button)`
  && {
    font-family: inherit;
    background-color: #2758d6;
    border-radius: 100px;
    font-size: 25px;
    line-height: 24px;
    color: #f5f5f5;
    text-transform: uppercase;
    padding: 13px 63px;
    transition: 0.3s;
    :hover {
      background-color: #202124;
      box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }

    @media screen and ${device.tablet} {
      font-size: 15px;
      line-height: 18px;
    }
    @media screen and ${device.mobileL} {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
