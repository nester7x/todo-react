import React, { FC } from 'react';

import Post from './components/Post';

import * as S from './styles';

type User = {
  avatarUrl: string;
  fullName: string;
};

type Post = {
  id: string;
  user: User;
  createdAt: string;
  title: string;
  text: string;
  tags: string[];
};

type PostsProps = {
  posts: Post[] | undefined;
};

const Posts: FC<PostsProps> = ({ posts }) => {
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
