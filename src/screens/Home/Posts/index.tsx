import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Preloader from 'components/Preloader';
import Post from 'components/Post';
import { usePosts } from 'hooks/usePosts';

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
        posts?.map((item, index) => <Post key={index} postData={item} />)
      ) : (
        <S.EmptyState>There are no posts...</S.EmptyState>
      )}
    </S.Wrapper>
  );
};

export default Posts;
