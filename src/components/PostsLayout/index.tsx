import React, { FC, useEffect, useState } from 'react';

import SideBar from './components/SideBar';
import Header from './components/Header';

import * as S from './styles';

type ActiveTab = {
  index: number;
  pathname: string;
};

type Tabs = {
  title: string;
  content: JSX.Element;
  to: string;
};

type Filters = {
  name: string;
  state: boolean;
};

type PostsLayoutProps = {
  activeTab: ActiveTab;
  tabs: Tabs[];
  handleTabClick: (index: number, to: string) => void;
  handleFiltersChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filters: Filters[];
};

const PostsLayout: FC<PostsLayoutProps> = ({
  activeTab,
  tabs,
  handleTabClick,
  handleFiltersChange,
  filters,
}) => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mainBlock: HTMLElement | null = document.querySelector('main')!;
      const currentScrollPos = mainBlock.scrollTop;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    document.querySelector('main')!.addEventListener('scroll', handleScroll);
    return () => {
      document.querySelector('main')!.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <S.Wrapper className={visible ? '' : 'hidden'}>
      <Header
        className={visible ? '' : 'hidden'}
        activeTab={activeTab}
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
      <SideBar
        className={`${activeTab.pathname === '/users' ? 'disabled' : ''} ${
          visible ? '' : 'hidden'
        }`}
        handleFiltersChange={handleFiltersChange}
        filters={filters}
      />
      <S.Main>{tabs[activeTab.index].content}</S.Main>
    </S.Wrapper>
  );
};

export default PostsLayout;
