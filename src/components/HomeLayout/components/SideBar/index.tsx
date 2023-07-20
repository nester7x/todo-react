import React, { FC, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getURLParams } from 'utils/getURLParams';
import { routes } from 'constants/routes';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const sortValue = getURLParams(location.search, 'sort');

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const isPostsPage = location.pathname === routes.posts;
  const isUsersPage = location.pathname === routes.users;
  const filters: Filters[] = [
    ...(isPostsPage ? postsFilters : []),
    ...(isUsersPage ? usersFilters : []),
  ];

  const handleChangeSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const search = searchParams.get('search');
    const sort = target.name;
    setSearchParams({ search: `${search}`, sort: `${sort}` });
  };

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={toggleNav}>
        <S.FilterIcon className={isOpen ? 'opened' : ''} />
      </S.IconWrapper>

      <S.FiltersMenu className={isOpen ? 'opened' : ''}>
        {filters?.length &&
          filters.map((filter) => (
            <S.MenuItem key={filter.value}>
              <S.CheckboxLabel>
                <S.InputCheck
                  name={filter.value}
                  onChange={handleChangeSort}
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
