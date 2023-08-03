import React, { FC } from 'react';
import HomeLayout from 'components/HomeLayout';
import Posts from './Posts';

const Home: FC = () => (
  <HomeLayout>
    <Posts />
  </HomeLayout>
);

export default Home;
