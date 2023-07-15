import React, { FC } from 'react';

import SideBar from './components/SideBar';
import Header from './components/Header';

import * as S from './styles';

type HomeLayoutProps = {
  children: React.ReactElement
};

const HomeLayout: FC<HomeLayoutProps> = ({
  children
}) => (
  <S.Wrapper>
    <Header />
    <SideBar/>
    {children}
  </S.Wrapper>
);

export default HomeLayout;
