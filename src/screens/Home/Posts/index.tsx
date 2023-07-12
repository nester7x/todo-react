import React, { FC } from 'react';

import Preloader from 'components/Preloader';
import Post from './components/Post';
import { usePosts } from 'hooks/usePosts';

import * as S from './styles';

type PostsProps = {
  apiQuery: string;
};

const Posts: FC<PostsProps> = ({ apiQuery }) => {
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
