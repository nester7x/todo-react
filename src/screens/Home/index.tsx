import React, { FC, useEffect, useState } from 'react';

import { api } from 'utils/apiUtils';

import * as S from './styles';

type Post = {
  id: string;
  username: string;
  createdAt: string;
  title: string;
  text: string;
  tags: string[];
};

const Home: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  useEffect(() => {
    (async () => {
      const data = await api.get(
        'posts',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc3OWJmNDAzM2U1MmZkMThiNGJkNzAiLCJpYXQiOjE2ODYwNjI3NTEsImV4cCI6MTY4NjkyNjc1MX0.isabrhZow8eqr83A33loVspETDnAYw1U5WQ2F9wddEI',
      );
      setPosts(data);
    })();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.SearchInput
          name='search'
          onChange={() => {
            console.log('input changed');
          }}
          placeholder='Search'
          type='text'
        />
        <S.Tabs>
          <S.Tab>Posts</S.Tab>
          <S.Tab>Users</S.Tab>
        </S.Tabs>
        <S.MakePostBtn to='create-post'>Make Post</S.MakePostBtn>
      </S.Header>
      <S.Posts>
        {posts.map((item) => (
          <S.Post key={item.createdAt}>
            <S.User>
              <img src='' alt='' />
              <S.PostInfo>
                <S.Username>{item.username}</S.Username>
                <S.Date>{convertDate(item.createdAt)}</S.Date>
              </S.PostInfo>
            </S.User>
            <S.Title>{item.title}</S.Title>
            <S.Text>{item.text}</S.Text>
          </S.Post>
        ))}
      </S.Posts>
    </S.Wrapper>
  );
};

export default Home;
