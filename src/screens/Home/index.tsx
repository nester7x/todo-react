import React, { FC, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import Posts from './Posts';
import Users from '../Users';
import PostsLayout from 'components/PostsLayout';
import { getCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';
import { sortedByDate, sortedByPopular } from 'utils/sortingPosts';

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
  viewsCount: number;
};

const Home: FC = () => {
  const queryClient = useQueryClient();
  const { data: posts } = useQuery<Post[]>({
    queryKey: ['posts'],
    enabled: getCookie('token') !== null,
    queryFn: () => {
      const token = getCookie('token');
      return api.get('posts', token);
    },
  });

  const [filters, setFilters] = useState([
    {
      name: 'date',
      state: false,
    },
    {
      name: 'popular',
      state: false,
    },
  ]);

  const [activeTab, setActiveTab] = useState({
    index: 0,
    pathname: '',
  });
  const tabs = [
    {
      title: 'posts',
      content: <Posts posts={posts} />,
      to: '/',
    },
    {
      title: 'users',
      content: <Users />,
      to: '/users',
    },
  ];

  const handleTabClick = (index: number, to: string): void => {
    setActiveTab((prevState) => ({ ...prevState, index: index, pathname: to }));
    window.history.pushState(null, '', to);
  };

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;
    setFilters((prev) =>
      prev.map((filter) => ({ ...filter, state: filter.name === name ? checked : false })),
    );
  };

  useEffect(() => {
    let sortedPosts: Post[] = [];

    if (Array.isArray(posts)) {
      sortedPosts = [...posts];

      filters.forEach(async (filter) => {
        if (filter.name === 'date' && filter.state) {
          sortedPosts = sortedByDate(sortedPosts);
        } else if (filter.name === 'popular' && filter.state) {
          sortedPosts = sortedByPopular(sortedPosts);
        } else if (filters.every((filter) => !filter.state)) {
          sortedPosts = await api.get('posts', '');
          queryClient.setQueryData('posts', sortedPosts);
        }
      });
    }

    queryClient.setQueryData('posts', sortedPosts);
  }, [filters]);

  useEffect(() => {
    const pathname = window.location.pathname;

    tabs.map((tab, index) => {
      if (tab.to === pathname) {
        setActiveTab((prevState) => ({ ...prevState, index: index, pathname: pathname }));
      }
    });
  }, []);

  return (
    <S.Wrapper>
      <PostsLayout
        activeTab={activeTab}
        tabs={tabs}
        handleTabClick={handleTabClick}
        handleFiltersChange={handleFiltersChange}
        filters={filters}
      />
    </S.Wrapper>
  );
};

export default Home;
