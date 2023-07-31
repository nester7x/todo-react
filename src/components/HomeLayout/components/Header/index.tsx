import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'constants/routes'

import Search from '../Search';

import * as S from './styles';

type Tabs = {
  title: string;
  to: string;
};

const tabs: Tabs[] = [
  {
    title: 'posts',
    to: routes.posts,
  },
  {
    title: 'users',
    to: routes.users,
  },
];

const Header: FC = () => {
  const location = useLocation();
  const isPostsPage = location.pathname === routes.posts
  const isActiveTab = tabs.find((tab) => tab.to === location.pathname)

  return (
    <S.Wrapper>
      <S.SearchWrap>
        <Search />
      </S.SearchWrap>

      <S.Tabs
        className={`${isActiveTab?.title}`}
      >
        {tabs.map((tab) => (
          <S.Tab key={tab.to} to={tab.to}>
            {tab.title}
          </S.Tab>
        ))}
      </S.Tabs>

      {isPostsPage && (
        <S.CreateBtn to='create-post'>
          Make Post
        </S.CreateBtn>
      )}
    </S.Wrapper>
  );
};

export default Header;
