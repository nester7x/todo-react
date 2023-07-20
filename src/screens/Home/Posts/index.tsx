import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Preloader from 'components/Preloader';
import { usePosts } from 'hooks/usePosts';

import Post from './components/Post';

import * as S from './styles';

const Posts: FC = () => {
  const location = useLocation();
  const { data: posts, isLoading } = usePosts(`posts${location.search}`);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <S.Wrapper>
      {posts?.length ? (
        posts?.map((item) => (
          <Post
            key={item.createdAt}
            createdAt={item.createdAt}
            avatarUrl={item?.user?.avatarUrl}
            fullName={item?.user?.fullName}
            title={item.title}
            text={item.text}
          />
        ))
      ) : (
        <S.EmptyState>There are no posts...</S.EmptyState>
      )}
    </S.Wrapper>
  );
};

export default Posts;
