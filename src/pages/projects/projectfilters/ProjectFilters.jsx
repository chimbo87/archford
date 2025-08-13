import React, { useState, useEffect } from 'react';
import './ProjectFilters.css';

const ProjectFilters = ({ projects = [], setFilteredProjects }) => {
  // Safely extract all unique tags from projects
  const allTags = ['All', ...new Set(
    projects
      .filter(project => project?.tags) // Filter out projects without tags
      .flatMap(project => project.tags)
  )];
  
  // Project types/categories
  const projectTypes = ['All', 'Web App', 'Mobile App', 'Website', 'API', 'Library'];
  const projectCategories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Design'];

  // State for active filters
  const [activeTag, setActiveTag] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on selected filters
  const filterProjects = (tag = activeTag, type = activeType, category = activeCategory) => {
    let filtered = [...projects];
    
    if (tag !== 'All') {
      filtered = filtered.filter(project => 
        project?.tags?.includes(tag)
      );
    }
    
    if (type !== 'All') {
      filtered = filtered.filter(project => 
        project?.type === type
      );
    }
    
    if (category !== 'All') {
      filtered = filtered.filter(project => 
        project?.category === category
      );
    }
    
    setFilteredProjects(filtered);
    setActiveTag(tag);
    setActiveType(type);
    setActiveCategory(category);
  };

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects([...projects]);
  }, [projects, setFilteredProjects]);

  return (
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
  );
};

export default ProjectFilters;