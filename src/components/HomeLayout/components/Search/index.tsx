import React, { FC } from 'react'
import { useUrlFilter } from 'react-filter-by-url';

import { params } from 'constants/filters';
import { getURLParams } from 'utils/getURLParams';

import * as S from './styles';

const Search: FC = () => {
  const { queryString, handleSelectFilter } = useUrlFilter(params, 'posts');
  const searchValue = getURLParams(queryString, 'search')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    handleSelectFilter(target.name, target.value)
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        name='search'
        value={searchValue}
        onChange={handleInputChange}
        placeholder='Search...'
        type='text'
      />
    </S.SearchContainer>
  )
}

export default Search
