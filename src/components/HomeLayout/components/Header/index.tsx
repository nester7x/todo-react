import React, { FC, useState } from 'react';

import * as S from './styles';

type Tabs = {
  title: string;
  content: JSX.Element;
  to: string;
};

type HeaderProps = {
  tabs: Tabs[];
  className: string;
};

const Header: FC<HeaderProps> = ({ tabs, className }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    setInputValue(target.value);
  };

  return (
    <S.Wrapper className={className}>
      <S.SearchInput
        name='search'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Search...'
        type='text'
      />
      <S.Tabs
        className={tabs
          .map((tab) => (tab.to === window.location.pathname ? tab.title : ''))
          .join(' ')}
      >
        {tabs.map((tab, index) => (
          <S.Tab key={index} to={tab.to}>
            {tab.title}
          </S.Tab>
        ))}
      </S.Tabs>
      <S.CreateBtn
        className={window.location.pathname === '/users' ? 'hidden' : ''}
        to='create-post'
      >
        Make Post
      </S.CreateBtn>
    </S.Wrapper>
  );
};

export default Header;
