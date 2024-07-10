import React from 'react';
import './App.css';
import exampleImage from './image/4k-nature.jpg';

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">Brain behind Hyena Media - Kartik Choudhary</div>
      <div className="intro-content">
        <div className="intro-image">
          <img src={exampleImage} alt="Example" />
        </div>
        <div className="intro-description">
          Meet Kartik Choudhary, the visionary entrepreneur behind Hyena Media. In the early days of 2020, Kartik embarked on a journey to redefine influencer marketing, fueled by a bold vision and unwavering determination. With a passion for innovation and a commitment to excellence, Kartik established Hyena Media with the sole aim of working with every client, irrespective of size, and supporting startups on their path to growth through the dynamic realm of influencer marketing. Driven by a belief in the transformative power of collaboration, Kartik envisions a digital landscape where brands, big and small, can harness the influence of individuals to carve their niche and tell their unique stories. His dedication to inclusivity and a hands-on approach reflects in Hyena Media's mission to empower startups, guiding them toward success with impactful influencer strategies. Join Kartik and the Hyena Media team on this exciting journey of innovation, collaboration, and growth. Together, let's turn every business venture into a success story through the influential lens of Hyena Media.
        </div>
      </div>
    </div>
  );
};
