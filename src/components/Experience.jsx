import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const experienceRefs = useRef([]);
  
  const experiences = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "SE Group SERDAC",
      duration: "Jan 2023 - Present",
      description: "Working as a frontend developer for SE Group SERDAC, focusing on creating responsive and user-friendly web interfaces. Collaborating with the team to implement modern web technologies and ensure optimal user experience across different platforms.",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX", "Version Control"],
      color: "#4ECDC4",
      icon: "fa-laptop-code"
    }
  ];
  
  const handleExperienceClick = (index) => {
    if (index === activeExperience || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveExperience(index);
      setIsAnimating(false);
    }, 300);
  };
  
  useEffect(() => {
    // Add scroll into view for the active experience
    if (experienceRefs.current[activeExperience]) {
      experienceRefs.current[activeExperience].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeExperience]);
  
  return (
    <div className="experience-container">
      <h1 className="experience-title">Professional Journey</h1>
      
      <div className="experience-orbit">
        <div className="orbit-center">
          <div className="orbit-center-content">
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </div>
        </div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            ref={el => experienceRefs.current[index] = el}
            className={`orbit-item ${index === activeExperience ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
            style={{
              '--orbit-angle': `${(index * (360 / experiences.length))}deg`,
              '--orbit-color': exp.color
            }}
            onClick={() => handleExperienceClick(index)}
          >
            <div className="orbit-icon">
              <i className={`fas ${exp.icon}`}></i>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`experience-details ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {experiences[activeExperience] && (
          <div className="experience-card" style={{ '--card-color': experiences[activeExperience].color }}>
            <div className="experience-header">
              <h2 className="experience-position">{experiences[activeExperience].position}</h2>
              <div className="experience-company-info">
                <h3 className="experience-company">{experiences[activeExperience].company}</h3>
                <span className="experience-duration">{experiences[activeExperience].duration}</span>
              </div>
            </div>
            
            <p className="experience-description">{experiences[activeExperience].description}</p>
            
            <div className="experience-skills">
              {experiences[activeExperience].skills.map((skill, idx) => (
                <span key={idx} className="skill-bubble">{skill}</span>
              ))}
            </div>
            
            <div className="experience-navigation">
              <button 
                className="nav-button prev"
                disabled={activeExperience === 0 || isAnimating}
                onClick={() => handleExperienceClick(activeExperience - 1)}
              >
                <i className="fas fa-chevron-left"></i> Previous
              </button>
              <div className="nav-indicators">
                {experiences.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`nav-dot ${idx === activeExperience ? 'active' : ''}`}
                    onClick={() => handleExperienceClick(idx)}
                  ></span>
                ))}
              </div>
              <button 
                className="nav-button next"
                disabled={activeExperience === experiences.length - 1 || isAnimating}
                onClick={() => handleExperienceClick(activeExperience + 1)}
              >
                Next <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
