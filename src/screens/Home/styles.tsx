import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Input from 'components/Input';

export const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled(Input)``;

export const Tabs = styled.div``;

export const Tab = styled.div``;

export const MakePostBtn = styled(NavLink)``;

export const Posts = styled.ul``;

export const Post = styled.li`
  background: #e1e1e1;
  border-radius: 25px;
  padding: 25px;
`;

export const User = styled.div``;
export const PostInfo = styled.div``;
export const Username = styled.h6``;
export const Title = styled.h6``;
export const Date = styled.span``;
export const Text = styled.p``;
