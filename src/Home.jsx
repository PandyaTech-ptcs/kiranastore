import React from 'react';
import MenuComponent from './MenuComponent';
import ImageSlider from './ImageSlider';
import CardMenu from './CardMenu';
import ReviewCard from './ReviewCard';

export const Home = () => {
  return (
    <>
      <MenuComponent />
      <ImageSlider />
      <CardMenu />   
      <ReviewCard />   
    </>
  );
};
