import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "TodoList App",
      description: "A responsive TodoList application built with React and Vite. Features include adding, editing, and deleting tasks, marking tasks as complete, and filtering tasks by status.",
      image: "/react (3).jpeg",
      category: "web",
      technologies: ["React", "Vite", "JavaScript", "CSS3", "LocalStorage"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Pokemon Explorer",
      description: "An interactive Pokemon application that uses the PokeAPI to display information about different Pokemon. Users can search for Pokemon, view their stats, abilities, and evolution chains.",
      image: "/react (4).jpeg",
      category: "web",
      technologies: ["React", "Vite", "PokeAPI", "Axios", "CSS3"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  const handleFilterChange = (category) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (category === 'all') {
        setFilteredProjects(projects);
      } else {
        const filtered = projects.filter(project => project.category === category);
        setFilteredProjects(filtered);
      }
      
      setFilter(category);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      
      <div className="projects-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => handleFilterChange('web')}
        >
          Web
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
          onClick={() => handleFilterChange('mobile')}
        >
          Mobile
        </button>
        <button 
          className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
          onClick={() => handleFilterChange('ai')}
        >
          AI
        </button>
      </div>
      
      <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card card-3d">
            <div className="card-3d-inner">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
