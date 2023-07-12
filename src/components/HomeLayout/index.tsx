import React, { FC, useEffect, useState } from 'react';

import SideBar from './components/SideBar';
import Header from './components/Header';

import * as S from './styles';

type Tabs = {
  title: string;
  content: JSX.Element;
  to: string;
};

type Filters = {
  name: string;
  value: string;
};

type HomeLayoutProps = {
  tabs: Tabs[];
  filters: Filters[];
  handleSelectFilter: (name: string, value: string) => void;
  getDefaultParamValue: (name: string, defaultValue: string) => string;
};

const HomeLayout: FC<HomeLayoutProps> = ({
  tabs,
  filters,
  handleSelectFilter,
  getDefaultParamValue,
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
      <Header className={visible ? '' : 'hidden'} tabs={tabs} />
      <SideBar
        className={visible ? '' : 'hidden'}
        filters={filters}
        handleSelectFilter={handleSelectFilter}
        getDefaultParamValue={getDefaultParamValue}
      />
      {tabs.map((tab, index) =>
        tab.to === window.location.pathname ? <S.Main key={index}>{tab.content}</S.Main> : '',
      )}
    </S.Wrapper>
  );
};

export default HomeLayout;
