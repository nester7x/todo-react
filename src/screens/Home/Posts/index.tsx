import React, { FC } from 'react';
import { useUrlFilter } from 'react-filter-by-url';

import Preloader from 'components/Preloader';
import { usePosts } from 'hooks/usePosts';

import { params } from 'constants/filters'

import Post from './components/Post';

import * as S from './styles';

const Posts: FC = () => {
  const { apiQuery } = useUrlFilter(params, 'posts');

  // TODO: not works
  const { data: posts, isLoading } = usePosts(apiQuery);

  if (isLoading) {
    return (
      <div>
        <Preloader />
      </div>
    );
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
