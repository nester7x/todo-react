import React, { FC, useState } from 'react';

import * as S from './styles';

type Tabs = {
  title: string;
  content: JSX.Element;
  to: string;
};

type ActiveTab = {
  index: number;
  pathname: string;
};

type HeaderProps = {
  activeTab: ActiveTab;
  tabs: Tabs[];
  handleTabClick: (index: number, to: string) => void;
  className: string;
};

const Header: FC<HeaderProps> = ({ activeTab, tabs, handleTabClick, className }) => {
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
        className={tabs.map((tab) => (tab.to === activeTab.pathname ? tab.title : '')).join(' ')}
      >
        {tabs.map((tab, index) => (
          <S.Tab
            className={index === activeTab.index ? 'active_tab' : ''}
            key={index}
            onClick={() => handleTabClick(index, tab.to)}
          >
            {tab.title}
          </S.Tab>
        ))}
      </S.Tabs>
      <S.CreateBtn className={activeTab.pathname === '/users' ? 'disabled' : ''} to='create-post'>
        Make Post
      </S.CreateBtn>
    </S.Wrapper>
  );
};

export default Header;
