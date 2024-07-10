import React from 'react';
import MenuComponent from './MenuComponent';
import { Display } from './Display';
import { Intro } from './Intro';

export const Home = () => {
  return (
    <>
      <MenuComponent />
      <Display />
      <Intro />
    </>
  );
};
