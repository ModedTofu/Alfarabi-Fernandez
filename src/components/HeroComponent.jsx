import React from 'react';
import profileImage from '../assets/images/profilee.jpg';

export const Hero = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>I'm AlFarabi Fernandez</h1>
        <p>Your Frontend Developer</p>
        <button className="btn">Please Hire Me</button>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile picture" />
      </div>
    </div>
  );
};

export default Hero;
