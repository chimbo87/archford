import React from 'react';
import './SkillsMatrix.css';

const SkillsMatrix = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Redux', level: 75 }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      category: 'Tools & Other',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'Jest', level: 80 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section className="sm-container">
      <div className="sm-content">
        <div className="sm-header">
          <h2 className="sm-title">Technical Skills</h2>
          <div className="sm-divider"></div>
          <p className="sm-subtitle">A detailed breakdown of my technical capabilities</p>
        </div>

        <div className="sm-matrix">
          {skills.map((category, index) => (
            <div className="sm-category" key={index}>
              <h3 className="sm-category-title">
                <span className="sm-category-icon">
                  {index === 0 && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
                    </svg>
                  )}
                </span>
                {category.category}
              </h3>
              
              <div className="sm-skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div className="sm-skill" key={skillIndex}>
                    <div className="sm-skill-info">
                      <span className="sm-skill-name">{skill.name}</span>
                      <span className="sm-skill-level">{skill.level}%</span>
                    </div>
                    <div className="sm-progress-bar">
                      <div 
                        className="sm-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;