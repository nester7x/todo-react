import React, { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import useDebounce from 'hooks/useDebounce';
import { getURLParams } from 'utils/getURLParams';

import * as S from './styles';

const Search: FC = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(getURLParams(location.search, 'search'));
  const debouncedSearchTerm = useDebounce(searchValue, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  useEffect(() => {
    setSearchParams((prev) => ({ ...prev, search: debouncedSearchTerm }));
  }, [debouncedSearchTerm]);

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
  );
};

export default Search;
