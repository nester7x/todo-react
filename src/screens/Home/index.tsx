import React, { FC } from 'react';
import { useUrlFilter } from 'react-filter-by-url';

import Posts from './Posts';
import Users from '../Users';
import HomeLayout from 'components/HomeLayout';

import * as S from './styles';

const Home: FC = () => {
  const params = ['page', 'filter'];
  const { apiQuery, getDefaultParamValue, handleSelectFilter } = useUrlFilter(
    params,
    `${window.location.pathname === '/users' ? 'users' : 'posts'}`,
  );

  const postsFilters = [
    {
      name: 'all',
      value: '',
    },
    {
      name: 'date',
      value: 'date',
    },
    {
      name: 'popular',
      value: 'popular',
    },
  ];

  const usersFilters = [
    {
      name: 'all',
      value: '',
    },
    {
      name: 'name',
      value: 'name',
    },
    {
      name: 'country',
      value: 'country',
    },
  ];

  const tabs = [
    {
      title: 'posts',
      content: <Posts apiQuery={apiQuery} />,
      to: '/',
    },
    {
      title: 'users',
      content: <Users />,
      to: '/users',
    },
  ];

  return (
    <S.Wrapper>
      <HomeLayout
        tabs={tabs}
        filters={window.location.pathname === '/users' ? usersFilters : postsFilters}
        handleSelectFilter={handleSelectFilter}
        getDefaultParamValue={getDefaultParamValue}
      />
    </S.Wrapper>
  );
};

export default Home;
