import styled from 'styled-components';

import Post from 'components/Post';

export const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 20px 0 10px;
`;

export const PostCustom = styled(Post)`
  && {
    margin: 0 0 15px;
  }
`;
