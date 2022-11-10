import styled from 'styled-components';

import Button from 'components/Button';
import { mediaQueries } from 'utils/MediaQueries';

export const Wrapper = styled.form`
  margin: 0 20px 20px;
  display: flex;
  ${mediaQueries.tablet} {
    margin: 0 10px 10px;
  }
`;

export const SendBtn = styled(Button)`
  && {
    margin-top: auto;
    background-color: #1976d2;
    width: 100%;
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    :hover {
      background-color: #1976d2;
      opacity: 0.8;
    }
  }
`;
