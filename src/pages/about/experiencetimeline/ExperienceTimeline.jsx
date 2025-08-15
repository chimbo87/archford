import React, { useState, useEffect } from 'react';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2023 - Present',
      duration: '1+ year',
      description: 'Leading development of web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver scalable solutions.',
      achievements: [
        'Built 5+ responsive web applications',
        'Improved app performance by 40%',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      icon: '💼',
      status: 'current'
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'University of Technology',
      location: 'Johannesburg, SA',
      period: '2020 - 2023',
      duration: '3 years',
      description: 'Comprehensive computer science education with focus on software engineering, algorithms, and data structures.',
      achievements: [
        'Graduated Magna Cum Laude',
        'Dean\'s List for 4 semesters',
        'Led final year capstone project'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL'],
      icon: '🎓',
      status: 'completed'
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Web Developer',
      organization: 'Digital Agency Pro',
      location: 'Cape Town, SA',
      period: '2022 - 2023',
      duration: '8 months',
      description: 'Developed and maintained client websites using modern web technologies. Gained experience in responsive design and user experience optimization.',
      achievements: [
        'Delivered 10+ client projects',
        'Reduced page load times by 35%',
        'Implemented mobile-first designs'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      icon: '💻',
      status: 'completed'
    },
    {
      id: 4,
      type: 'certification',
      title: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      location: 'Online',
      period: '2023',
      duration: '3 months prep',
      description: 'Comprehensive certification covering AWS services, serverless computing, and cloud application development.',
      achievements: [
        'Passed with 850/1000 score',
        'Completed hands-on labs',
        'Built cloud-native applications'
      ],
      technologies: ['AWS Lambda', 'DynamoDB', 'S3', 'CloudFormation'],
      icon: '🏆',
      status: 'completed'
    },
    {
      id: 5,
      type: 'work',
      title: 'Frontend Developer Intern',
      organization: 'StartupHub',
      location: 'Pretoria, SA',
      period: '2021 - 2022',
      duration: '6 months',
      description: 'Internship focused on frontend development and UI/UX design. Worked closely with senior developers to learn industry best practices.',
      achievements: [
        'Redesigned company landing page',
        'Increased user engagement by 25%',
        'Learned React and modern tooling'
      ],
      technologies: ['React', 'Tailwind', 'Figma', 'Git'],
      icon: '🚀',
      status: 'completed'
    },
    {
      id: 6,
      type: 'certification',
      title: 'Google Analytics Certified',
      organization: 'Google',
      location: 'Online',
      period: '2022',
      duration: '1 month prep',
      description: 'Certification in web analytics, data interpretation, and digital marketing metrics.',
      achievements: [
        'Advanced Analytics proficiency',
        'E-commerce tracking expertise',
        'Custom reporting skills'
      ],
      technologies: ['Google Analytics', 'Data Studio', 'GTM'],
      icon: '📊',
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'work', label: 'Work', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certification', label: 'Certifications', icon: '🏆' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.experience-timeline__item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeFilter);

  const getTypeColor = (type) => {
    const colors = {
      work: '#3b82f6',
      education: '#10b981', 
      certification: '#f59e0b'
    };
    return colors[type] || '#3b82f6';
  };

  return (
    <section className="experience-timeline">
      <div className="experience-timeline__container">
        {/* Header */}
        <div className="experience-timeline__header">
          <div className="experience-timeline__badge">My Journey</div>
          <h2 className="experience-timeline__title">
            Experience
            <span className="experience-timeline__title-accent"> Timeline</span>
          </h2>
          <p className="experience-timeline__subtitle">
            A comprehensive look at my professional growth, education, and achievements
          </p>
        </div>

        {/* Filters */}
        <div className="experience-timeline__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`experience-timeline__filter ${
                activeFilter === filter.id ? 'experience-timeline__filter--active' : ''
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="experience-timeline__filter-icon">{filter.icon}</span>
              <span className="experience-timeline__filter-label">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="experience-timeline__wrapper">
          <div className="experience-timeline__line"></div>
          
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`experience-timeline__item ${
                visibleItems.has(item.id) ? 'experience-timeline__item--visible' : ''
              } ${index % 2 === 0 ? 'experience-timeline__item--left' : 'experience-timeline__item--right'}`}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="experience-timeline__dot-container">
                <div 
                  className="experience-timeline__dot"
                  style={{ '--dot-color': getTypeColor(item.type) }}
                >
                  <span className="experience-timeline__dot-icon">{item.icon}</span>
                </div>
                <div className="experience-timeline__pulse"></div>
              </div>

              <div className="experience-timeline__card">
                <div className="experience-timeline__card-header">
                  <div className="experience-timeline__card-meta">
                    <span className={`experience-timeline__type experience-timeline__type--${item.type}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className={`experience-timeline__status experience-timeline__status--${item.status}`}>
                      {item.status === 'current' ? '🟢 Current' : '✅ Completed'}
                    </span>
                  </div>
                  
                  <h3 className="experience-timeline__card-title">{item.title}</h3>
                  <div className="experience-timeline__card-subtitle">
                    <span className="experience-timeline__organization">{item.organization}</span>
                    <span className="experience-timeline__location">📍 {item.location}</span>
                  </div>
                  
                  <div className="experience-timeline__period">
                    <span className="experience-timeline__dates">📅 {item.period}</span>
                    <span className="experience-timeline__duration">⏱️ {item.duration}</span>
                  </div>
                </div>

                <div className="experience-timeline__card-body">
                  <p className="experience-timeline__description">{item.description}</p>
                  
                  <div className="experience-timeline__achievements">
                    <h4 className="experience-timeline__achievements-title">Key Achievements:</h4>
                    <ul className="experience-timeline__achievements-list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="experience-timeline__achievement">
                          <span className="experience-timeline__achievement-bullet">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-timeline__technologies">
                    <h4 className="experience-timeline__tech-title">Technologies:</h4>
                    <div className="experience-timeline__tech-list">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="experience-timeline__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="experience-timeline__card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="experience-timeline__summary">
          <div className="experience-timeline__stat">
            <span className="experience-timeline__stat-number">2+</span>
            <span className="experience-timeline__stat-label">Years Experience</span>
          </div>
          <div className="experience-timeline__stat">
            <span className="experience-timeline__stat-number">4+</span>
            <span className="experience-timeline__stat-label">Positions Held</span>
          </div>
          <div className="experience-timeline__stat">
            <span className="experience-timeline__stat-number">3+</span>
            <span className="experience-timeline__stat-label">Certifications</span>
          </div>
          <div className="experience-timeline__stat">
            <span className="experience-timeline__stat-number">15+</span>
            <span className="experience-timeline__stat-label">Projects Completed</span>
          </div>
        </div>

        {/* Background Elements */}
        <div className="experience-timeline__bg-elements">
          <div className="experience-timeline__bg-shape experience-timeline__bg-shape--1"></div>
          <div className="experience-timeline__bg-shape experience-timeline__bg-shape--2"></div>
          <div className="experience-timeline__bg-grid"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;