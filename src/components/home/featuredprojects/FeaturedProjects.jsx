import React, { useState, useEffect } from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      highlights: [
        "Real-time inventory management",
        "Secure payment processing",
        "Responsive design",
        "Admin analytics dashboard"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Built with React, Socket.io, and PostgreSQL. Features drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "/api/placeholder/600/400",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      highlights: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Advanced filtering",
        "Progress analytics"
      ]
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics dashboard that uses machine learning to provide insights. Built with Python, React, and integrated with multiple data sources for comprehensive business intelligence.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      technologies: ["React", "Python", "FastAPI", "TensorFlow", "D3.js"],
      githubUrl: "https://github.com/yourusername/ai-analytics",
      liveUrl: "https://your-analytics-demo.com",
      highlights: [
        "ML-powered insights",
        "Interactive visualizations",
        "Multi-source data integration",
        "Predictive analytics"
      ]
    }
  ];

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleProjectChange = (index) => {
    setActiveProject(index);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="featured-projects" id="projects">
      <div className="featured-projects__container">
        {/* Section Header */}
        <div className="featured-projects__header">
          <div className="featured-projects__label">
            <span className="featured-projects__label-text">Portfolio</span>
          </div>
          <h2 className="featured-projects__title">
            Featured <span className="featured-projects__title-highlight">Projects</span>
          </h2>
          <p className="featured-projects__subtitle">
            Showcasing my best work in web development, from concept to deployment
          </p>
        </div>

        {/* Main Content */}
        <div className="featured-projects__content">
          {/* Project Navigation */}
          <div className="featured-projects__nav">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`featured-projects__nav-item ${
                  activeProject === index ? 'active' : ''
                }`}
                onClick={() => handleProjectChange(index)}
              >
                <div className="featured-projects__nav-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="featured-projects__nav-info">
                  <h4 className="featured-projects__nav-title">{project.title}</h4>
                  <span className="featured-projects__nav-category">{project.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="featured-projects__showcase">
            <div className="featured-projects__project">
              {/* Project Image */}
              <div className="featured-projects__image-container">
                <div className="featured-projects__image-wrapper">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="featured-projects__image"
                  />
                  <div className="featured-projects__image-overlay">
                    <div className="featured-projects__overlay-content">
                      <button
                        className="featured-projects__overlay-btn"
                        onClick={() => handleExternalLink(projects[activeProject].liveUrl)}
                        aria-label="View live project"
                      >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                        <span>Live Demo</span>
                      </button>
                      <button
                        className="featured-projects__overlay-btn"
                        onClick={() => handleExternalLink(projects[activeProject].githubUrl)}
                        aria-label="View source code"
                      >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="featured-projects__info">
                <div className="featured-projects__project-header">
                  <div className="featured-projects__project-meta">
                    <span className="featured-projects__project-category">
                      {projects[activeProject].category}
                    </span>
                    <span className="featured-projects__project-number">
                      {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="featured-projects__project-title">
                    {projects[activeProject].title}
                  </h3>
                </div>

                <p className="featured-projects__project-description">
                  {projects[activeProject].description}
                </p>

                {/* Technologies */}
                <div className="featured-projects__technologies">
                  <h4 className="featured-projects__tech-title">Technologies Used:</h4>
                  <div className="featured-projects__tech-list">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="featured-projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="featured-projects__highlights">
                  <h4 className="featured-projects__highlights-title">Key Features:</h4>
                  <ul className="featured-projects__highlights-list">
                    {projects[activeProject].highlights.map((highlight, index) => (
                      <li key={index} className="featured-projects__highlight-item">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="featured-projects__actions">
                  <button
                    className="featured-projects__action-btn featured-projects__action-btn--primary"
                    onClick={() => handleExternalLink(projects[activeProject].liveUrl)}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    View Live Demo
                  </button>
                  <button
                    className="featured-projects__action-btn featured-projects__action-btn--secondary"
                    onClick={() => handleExternalLink(projects[activeProject].githubUrl)}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="featured-projects__indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`featured-projects__indicator ${
                  activeProject === index ? 'active' : ''
                }`}
                onClick={() => handleProjectChange(index)}
                aria-label={`View project ${index + 1}`}
              >
                <div className="featured-projects__indicator-progress"></div>
              </button>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="featured-projects__footer">
          <a href="#all-projects" className="featured-projects__view-all">
            <span>View All Projects</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;