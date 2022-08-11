import styled from 'styled-components';

import Input from 'components/Input';
import Btn from 'components/Button';

export const Wrapper = styled.div`
  display: flex;
`;

export const AddBtn = styled(Btn)`
  && {
    padding: 8px;
    border-radius: 0 3px 3px 0;
  }
`;

export const TaskInput = styled(Input)`
  && {
    padding: 8px 15px;
    background: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px 0 0 3px;
    color: #000000;
    :before {
      border-bottom: 2px solid #394252;
    }
    :after {
      border-bottom: 2px solid #394252;
    }
    :hover:before {
      border-bottom: 2px solid transparent !important;
    }
  }
`;
