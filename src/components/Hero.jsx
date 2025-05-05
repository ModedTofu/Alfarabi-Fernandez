import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profilee.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-name">AlFarabi Fernandez</h1>
        <div className="hero-title">
          <span className="hero-title-text">Frontend Developer</span>
          <span className="hero-title-cursor"></span>
        </div>
        
        <p className="hero-description">
          I create modern, responsive web applications with a focus on user experience and performance.
        </p>
        
        <div className="hero-buttons">
          <Link to="/contact" className="btn primary-btn">
            Hire Me <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/projects" className="btn secondary-btn">
            View My Work
          </Link>
        </div>
        
        <div className="hero-social">
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image-wrapper">
          <img src={profileImage} alt="AlFarabi Fernandez" />
        </div>
        <div className="hero-image-bg"></div>
      </div>
    </div>
  );
};

export default Hero;
