import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    // Animate progress bars on component mount
    const progressBars = document.querySelectorAll('.tech-progress');
    progressBars.forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.getAttribute('data-width');
      }, 300);
    });
  }, []);

  const frontendSkills = [
    {
      name: "HTML",
      level: "70%",
      icon: "fab fa-html5",
      description: "Familiar with semantic HTML and basic structure"
    },
    {
      name: "CSS",
      level: "65%",
      icon: "fab fa-css3-alt",
      description: "Comfortable with layouts, responsive design, and basic animations"
    },
    {
      name: "JavaScript",
      level: "55%",
      icon: "fab fa-js",
      description: "Understanding core concepts and DOM manipulation"
    },
    {
      name: "React",
      level: "45%",
      icon: "fab fa-react",
      description: "Learning component structure, hooks, and state management"
    },
    {
      name: "Bootstrap",
      level: "60%",
      icon: "fab fa-bootstrap",
      description: "Using for responsive layouts and pre-built components"
    }
  ];

  const backendSkills = [
    {
      name: "PHP",
      level: "40%",
      icon: "fab fa-php",
      description: "Basic understanding of server-side scripting"
    },
    {
      name: "MySQL",
      level: "35%",
      icon: "fas fa-database",
      description: "Creating simple databases and basic queries"
    },
    {
      name: "Git",
      level: "50%",
      icon: "fab fa-git-alt",
      description: "Version control fundamentals and collaboration"
    }
  ];

  const learningSteps = [
    {
      number: 1,
      title: "Strengthen JavaScript Fundamentals",
      description: "Focusing on core concepts like async/await, promises, and ES6+ features"
    },
    {
      number: 2,
      title: "Deepen React Knowledge",
      description: "Building more complex applications with state management and hooks"
    },
    {
      number: 3,
      title: "Explore Backend Technologies",
      description: "Expanding PHP skills and learning Node.js for full-stack development"
    },
    {
      number: 4,
      title: "Practice with Real Projects",
      description: "Applying knowledge by building portfolio projects and contributing to open source"
    }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills & Learning Journey</h1>
      
      <div className="skills-content">
        <div className="skills-card">
          <h2 className="skills-card-title">Frontend Development</h2>
          <div className="tech-stack">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">
                  <i className={skill.icon}></i>
                </div>
                <div className="tech-details">
                  <div className="tech-name">{skill.name}</div>
                  <div className="tech-level">
                    <div 
                      className="tech-progress" 
                      data-width={skill.level}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="tech-description">{skill.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-card">
          <h2 className="skills-card-title">Backend & Tools</h2>
          <div className="tech-stack">
            {backendSkills.map((skill, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">
                  <i className={skill.icon}></i>
                </div>
                <div className="tech-details">
                  <div className="tech-name">{skill.name}</div>
                  <div className="tech-level">
                    <div 
                      className="tech-progress" 
                      data-width={skill.level}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="tech-description">{skill.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="learning-path">
        <h2 className="learning-path-title">My Learning Path</h2>
        <div className="learning-steps">
          {learningSteps.map((step, index) => (
            <div key={index} className="learning-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-footer">
        <p>I'm constantly learning and improving my skills. This is a snapshot of my current journey as a developing programmer.</p>
      </div>
    </div>
  );
};

export default Skills;
