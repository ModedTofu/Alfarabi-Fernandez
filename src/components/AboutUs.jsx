import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div id="about-us" className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm AlFarabi Fernandez, a passionate frontend developer with a keen eye for creating beautiful, functional, and user-friendly websites. I specialize in building modern web applications using the latest technologies and best practices.
      </p>
      <p>
        With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing designs to life and creating seamless user experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
      </p>
      <p>
        My goal is to create user-friendly, modern, and highly functional applications that not only meet but exceed client expectations.
      </p>
      <div className="about-buttons" style={{ marginTop: '25px' }}>
        <Link to="/experience" className="btn">
          <i className="fas fa-briefcase"></i> View My Experience
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
