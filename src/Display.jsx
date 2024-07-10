import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './App.css';

export const Display = () => {
  return (
    <div className="display-container">
      <div className="display-title">We Create To Influence </div>
      <div className="display-title">Empowering Creator Economy </div>
      <div className="display-content">
        Hyena Media is a dynamic Influencer Marketing agency dedicated to shaping impactful connections between influencers and brands. 
        With a commitment to authenticity and innovation, we specialize in tailor-made campaigns that elevate brand narratives, boost visibility, 
        and drive tangible results. From strategic movie promotions and brand marketing to song promotions, meme marketing, content creation, 
        and live show experiences, we offer a comprehensive suite of services. Our team, fueled by creativity and data-driven insights, collaborates 
        seamlessly to craft memorable campaigns that resonate across digital landscapes. At Hyena Media, we redefine influence, making it a catalyst 
        for growth and success for both brands and influencers alike. Join us in creating moments that leave a lasting impression in the hearts and minds 
        of audiences worldwide.
      </div>
      <div className="social-icons">
      <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="button"
      aria-pressed="false"
      autoComplete="off"
      style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '5px' }}
    >
      Contact Us
    </button>
        
    </div>
      <div className="social-icons">
        <FaTwitter size={30} />
        <FaFacebook size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  );
};
