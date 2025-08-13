import React, { useState } from 'react';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'Web App',
      category: 'Fullstack',
      imageUrl: 'https://picsum.photos/id/180/800/600',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task board with drag-and-drop functionality and real-time updates.',
      tags: ['React', 'Firebase', 'Material UI'],
      type: 'Web App',
      category: 'Frontend',
      imageUrl: 'https://picsum.photos/id/119/800/600',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with interactive maps and historical data.',
      tags: ['JavaScript', 'API Integration', 'Chart.js'],
      type: 'Web App',
      category: 'Frontend',
      imageUrl: 'https://picsum.photos/id/28/800/600',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio showcasing design and development work.',
      tags: ['React', 'GSAP', 'CSS Modules'],
      type: 'Website',
      category: 'Frontend',
      imageUrl: 'https://picsum.photos/id/160/800/600',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Search thousands of recipes with filtering by ingredients, diet, and cooking time.',
      tags: ['React', 'Redux', 'Spoonacular API'],
      type: 'Web App',
      category: 'Frontend',
      imageUrl: 'https://picsum.photos/id/112/800/600',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Workout logging application with progress tracking and exercise database.',
      tags: ['React Native', 'Firebase', 'Expo'],
      type: 'Mobile App',
      category: 'Fullstack',
      imageUrl: 'https://picsum.photos/id/229/800/600',
      liveUrl: '#',
      codeUrl: '#'
    }
  ]);

  const [filteredProjects, setFilteredProjects] = useState([...projects]);
  const [activeTag, setActiveTag] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract all unique tags from projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  // Project types and categories
  const projectTypes = ['All', 'Web App', 'Mobile App', 'Website', 'API'];
  const projectCategories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Design'];

  // Filter projects based on selected filters
  const filterProjects = (tag = activeTag, type = activeType, category = activeCategory) => {
    let filtered = [...projects];
    
    if (tag !== 'All') {
      filtered = filtered.filter(project => project.tags.includes(tag));
    }
    
    if (type !== 'All') {
      filtered = filtered.filter(project => project.type === type);
    }
    
    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    setFilteredProjects(filtered);
    setActiveTag(tag);
    setActiveType(type);
    setActiveCategory(category);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">A collection of my recent work</p>
        
        {/* Filters Section */}
        <div className="pf-container">
          <div className="pf-filter-group">
            <h4 className="pf-filter-title">Filter by Technology</h4>
            <div className="pf-tags">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  className={`pf-tag ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => filterProjects(tag, activeType, activeCategory)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="pf-filter-group">
            <h4 className="pf-filter-title">Filter by Type</h4>
            <div className="pf-types">
              {projectTypes.map((type, index) => (
                <button
                  key={index}
                  className={`pf-type ${activeType === type ? 'active' : ''}`}
                  onClick={() => filterProjects(activeTag, type, activeCategory)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="pf-filter-group">
            <h4 className="pf-filter-title">Filter by Category</h4>
            <div className="pf-categories">
              {projectCategories.map((category, index) => (
                <button
                  key={index}
                  className={`pf-category ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => filterProjects(activeTag, activeType, category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="pf-active-filters">
            {activeTag !== 'All' && (
              <span className="pf-active-filter">
                Technology: {activeTag}
                <button 
                  className="pf-clear-filter"
                  onClick={() => filterProjects('All', activeType, activeCategory)}
                >
                  ×
                </button>
              </span>
            )}
            {activeType !== 'All' && (
              <span className="pf-active-filter">
                Type: {activeType}
                <button 
                  className="pf-clear-filter"
                  onClick={() => filterProjects(activeTag, 'All', activeCategory)}
                >
                  ×
                </button>
              </span>
            )}
            {activeCategory !== 'All' && (
              <span className="pf-active-filter">
                Category: {activeCategory}
                <button 
                  className="pf-clear-filter"
                  onClick={() => filterProjects(activeTag, activeType, 'All')}
                >
                  ×
                </button>
              </span>
            )}
            {(activeTag !== 'All' || activeType !== 'All' || activeCategory !== 'All') && (
              <button 
                className="pf-clear-all"
                onClick={() => filterProjects('All', 'All', 'All')}
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live-demo">
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link view-code">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects match your filters. Try adjusting your selection.</p>
            <button 
              className="projects-reset-filters"
              onClick={() => filterProjects('All', 'All', 'All')}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;