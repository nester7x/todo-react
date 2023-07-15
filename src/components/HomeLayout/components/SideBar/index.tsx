import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useUrlFilter} from 'react-filter-by-url';

import {getURLParams} from 'utils/getURLParams';
import { routes } from 'constants/routes'
import { params } from 'constants/filters'

import * as S from './styles';

type Filters = {
  name: string;
  value: string;
};

const postsFilters: Filters[] = [
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

const usersFilters: Filters[] = [
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

const SideBar: FC = () => {
  const location = useLocation();
  const { queryString, getDefaultParamValue, handleSelectFilter } = useUrlFilter(params, 'posts');
  const [isOpen, setIsOpen] = useState(false);
  const sortValue = getURLParams(queryString, 'sort')

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  }

  const isPostsPage = location.pathname === routes.posts
  const isUsersPage = location.pathname === routes.users
  const filters: Filters[] = [
    ...(isPostsPage ? postsFilters : []),
    ...(isUsersPage ? usersFilters : [])
  ]

  const handleChangeSort = (e: any) => {
    handleSelectFilter('sort', e.target.name)
  }

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={toggleNav}>
        <S.FilterIcon className={isOpen ? 'opened' : ''} />
      </S.IconWrapper>

      <S.FiltersMenu className={isOpen ? 'opened' : ''}>
        {filters?.length && filters.map((filter) => (
          <S.MenuItem key={filter.value}>
            <S.CheckboxLabel>
              <S.InputCheck
                name={filter.value}
                onChange={handleChangeSort}
                defaultValue={getDefaultParamValue('sort', '')}
                type='radio'
                value={filter.value}
                checked={filter.value === sortValue}
              />
              <S.LabelName>{filter.name}</S.LabelName>
            </S.CheckboxLabel>
          </S.MenuItem>
        ))}
      </S.FiltersMenu>
    </S.Wrapper>
  );
};

export default SideBar;
