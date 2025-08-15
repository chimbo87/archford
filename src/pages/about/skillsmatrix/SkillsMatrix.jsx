import React, { useState, useEffect } from 'react';
import './SkillsMatrix.css';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const skillsData = {
    frontend: [
      { name: 'React', level: 'expert', icon: '⚛️', experience: '2+ years', description: 'Component-based UI development' },
      { name: 'JavaScript', level: 'expert', icon: '🟨', experience: '2+ years', description: 'ES6+, Async/Await, DOM manipulation' },
      { name: 'TypeScript', level: 'advanced', icon: '🔷', experience: '1+ year', description: 'Type-safe development' },
      { name: 'HTML5', level: 'expert', icon: '🧡', experience: '2+ years', description: 'Semantic markup, accessibility' },
      { name: 'CSS3', level: 'expert', icon: '💙', experience: '2+ years', description: 'Flexbox, Grid, animations' },
      { name: 'Tailwind CSS', level: 'advanced', icon: '🎨', experience: '1+ year', description: 'Utility-first styling' },
      { name: 'SASS/SCSS', level: 'advanced', icon: '💗', experience: '1+ year', description: 'CSS preprocessing' },
      { name: 'Vue.js', level: 'intermediate', icon: '💚', experience: '6+ months', description: 'Progressive framework' }
    ],
    backend: [
      { name: 'Node.js', level: 'advanced', icon: '💚', experience: '1+ year', description: 'Server-side JavaScript' },
      { name: 'Python', level: 'advanced', icon: '🐍', experience: '1+ year', description: 'Django, Flask, automation' },
      { name: 'Express.js', level: 'advanced', icon: '⚡', experience: '1+ year', description: 'Web application framework' },
      { name: 'MongoDB', level: 'advanced', icon: '🍃', experience: '1+ year', description: 'NoSQL database design' },
      { name: 'PostgreSQL', level: 'intermediate', icon: '🐘', experience: '8+ months', description: 'Relational database management' },
      { name: 'RESTful APIs', level: 'expert', icon: '🔗', experience: '1+ year', description: 'API design & implementation' },
      { name: 'GraphQL', level: 'intermediate', icon: '🔺', experience: '6+ months', description: 'Query language for APIs' },
      { name: 'Firebase', level: 'advanced', icon: '🔥', experience: '8+ months', description: 'BaaS, real-time database' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 'expert', icon: '🐙', experience: '2+ years', description: 'Version control, collaboration' },
      { name: 'VS Code', level: 'expert', icon: '💙', experience: '2+ years', description: 'IDE, extensions, debugging' },
      { name: 'Docker', level: 'intermediate', icon: '🐳', experience: '6+ months', description: 'Containerization' },
      { name: 'Webpack', level: 'advanced', icon: '📦', experience: '1+ year', description: 'Module bundling' },
      { name: 'Jest', level: 'intermediate', icon: '🃏', experience: '8+ months', description: 'JavaScript testing' },
      { name: 'Figma', level: 'advanced', icon: '🎨', experience: '1+ year', description: 'UI/UX design' },
      { name: 'Postman', level: 'advanced', icon: '📮', experience: '1+ year', description: 'API testing & documentation' },
      { name: 'AWS', level: 'learning', icon: '☁️', experience: '4+ months', description: 'Cloud services & deployment' }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '💻' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools & Others', icon: '🛠️' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationTriggered(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const getLevelIcon = (level) => {
    const icons = {
      expert: '🔥🔥🔥',
      advanced: '🔥🔥',
      intermediate: '🔥',
      learning: '📚'
    };
    return icons[level] || '📚';
  };

  const getLevelLabel = (level) => {
    const labels = {
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate', 
      learning: 'Learning'
    };
    return labels[level] || 'Learning';
  };

  return (
    <section className="skills-matrix">
      <div className="skills-matrix__container">
        {/* Header */}
        <div className="skills-matrix__header">
          <div className="skills-matrix__badge">Technical Arsenal</div>
          <h2 className="skills-matrix__title">
            Skills
            <span className="skills-matrix__title-accent"> Matrix</span>
          </h2>
          <p className="skills-matrix__subtitle">
            Technologies I use to bring ideas to life and solve complex problems
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-matrix__tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skills-matrix__tab ${
                activeCategory === category.id ? 'skills-matrix__tab--active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="skills-matrix__tab-icon">{category.icon}</span>
              <span className="skills-matrix__tab-label">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-matrix__grid">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className={`skills-matrix__card skills-matrix__card--${skill.level} ${
                animationTriggered ? 'skills-matrix__card--animate' : ''
              }`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="skills-matrix__card-inner">
                <div className="skills-matrix__card-front">
                  <div className="skills-matrix__skill-header">
                    <span className="skills-matrix__skill-icon">{skill.icon}</span>
                    <div className="skills-matrix__skill-info">
                      <h3 className="skills-matrix__skill-name">{skill.name}</h3>
                      <span className="skills-matrix__skill-experience">{skill.experience}</span>
                    </div>
                  </div>
                  
                  <div className="skills-matrix__level-indicator">
                    <div className="skills-matrix__level-dots">
                      <div className={`skills-matrix__dot ${skill.level === 'expert' || skill.level === 'advanced' || skill.level === 'intermediate' || skill.level === 'learning' ? 'skills-matrix__dot--active' : ''}`}></div>
                      <div className={`skills-matrix__dot ${skill.level === 'expert' || skill.level === 'advanced' || skill.level === 'intermediate' ? 'skills-matrix__dot--active' : ''}`}></div>
                      <div className={`skills-matrix__dot ${skill.level === 'expert' || skill.level === 'advanced' ? 'skills-matrix__dot--active' : ''}`}></div>
                      <div className={`skills-matrix__dot ${skill.level === 'expert' ? 'skills-matrix__dot--active' : ''}`}></div>
                    </div>
                    <span className="skills-matrix__level-label">{getLevelLabel(skill.level)}</span>
                  </div>

                  <div className="skills-matrix__skill-icons">
                    <span className="skills-matrix__level-emoji">{getLevelIcon(skill.level)}</span>
                  </div>
                </div>

                <div className="skills-matrix__card-back">
                  <div className="skills-matrix__description">
                    <h4>What I can do:</h4>
                    <p>{skill.description}</p>
                  </div>
                  <div className="skills-matrix__level-badge">
                    <span className={`skills-matrix__badge-text skills-matrix__badge-text--${skill.level}`}>
                      {getLevelLabel(skill.level)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="skills-matrix__legend">
          <h4 className="skills-matrix__legend-title">Proficiency Levels</h4>
          <div className="skills-matrix__legend-items">
            <div className="skills-matrix__legend-item">
              <span className="skills-matrix__legend-icon">🔥🔥🔥</span>
              <span>Expert - Can teach others & lead projects</span>
            </div>
            <div className="skills-matrix__legend-item">
              <span className="skills-matrix__legend-icon">🔥🔥</span>
              <span>Advanced - Confident in complex scenarios</span>
            </div>
            <div className="skills-matrix__legend-item">
              <span className="skills-matrix__legend-icon">🔥</span>
              <span>Intermediate - Comfortable with basics</span>
            </div>
            <div className="skills-matrix__legend-item">
              <span className="skills-matrix__legend-icon">📚</span>
              <span>Learning - Currently developing skills</span>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="skills-matrix__bg-elements">
          <div className="skills-matrix__bg-shape skills-matrix__bg-shape--1"></div>
          <div className="skills-matrix__bg-shape skills-matrix__bg-shape--2"></div>
          <div className="skills-matrix__bg-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;