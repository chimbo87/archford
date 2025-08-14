import React, { useState, useEffect } from 'react';

const SkillsTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z"/>
        </svg>
      ),
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H9V19H8V21H16V19H15V18H20Z"/>
        </svg>
      ),
      description: 'Building robust server-side applications and APIs'
    },
    {
      id: 'database',
      name: 'Database',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
        </svg>
      ),
      description: 'Designing and managing data storage solutions'
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
        </svg>
      ),
      description: 'Development tools and deployment workflows'
    }
  ];

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️', color: '#61DAFB', experience: '4+ years' },
      { name: 'JavaScript (ES6+)', level: 92, icon: '🟨', color: '#F7DF1E', experience: '5+ years' },
      { name: 'TypeScript', level: 88, icon: '🔷', color: '#3178C6', experience: '3+ years' },
      { name: 'Next.js', level: 90, icon: '▲', color: '#000000', experience: '2+ years' },
      { name: 'HTML5', level: 95, icon: '🌐', color: '#E34F26', experience: '6+ years' },
      { name: 'CSS3/SASS', level: 92, icon: '🎨', color: '#1572B6', experience: '5+ years' },
      { name: 'Tailwind CSS', level: 85, icon: '💨', color: '#06B6D4', experience: '2+ years' },
      { name: 'Vue.js', level: 75, icon: '💚', color: '#4FC08D', experience: '1+ years' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: '🟢', color: '#339933', experience: '4+ years' },
      { name: 'Express.js', level: 88, icon: '🚀', color: '#000000', experience: '4+ years' },
      { name: 'Python', level: 85, icon: '🐍', color: '#3776AB', experience: '3+ years' },
      { name: 'Django', level: 80, icon: '🔥', color: '#092E20', experience: '2+ years' },
      { name: 'FastAPI', level: 82, icon: '⚡', color: '#009688', experience: '2+ years' },
      { name: 'GraphQL', level: 78, icon: '📊', color: '#E10098', experience: '2+ years' },
      { name: 'REST APIs', level: 92, icon: '🔌', color: '#FF6B35', experience: '4+ years' },
      { name: 'Microservices', level: 75, icon: '🏗️', color: '#4A90E2', experience: '2+ years' }
    ],
    database: [
      { name: 'MongoDB', level: 88, icon: '🍃', color: '#47A248', experience: '3+ years' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', color: '#336791', experience: '3+ years' },
      { name: 'MySQL', level: 82, icon: '🗄️', color: '#4479A1', experience: '3+ years' },
      { name: 'Redis', level: 80, icon: '🔴', color: '#DC382D', experience: '2+ years' },
      { name: 'Firebase', level: 78, icon: '🔥', color: '#FFCA28', experience: '2+ years' },
      { name: 'Prisma', level: 75, icon: '⚪', color: '#2D3748', experience: '1+ years' },
      { name: 'Elasticsearch', level: 70, icon: '🔍', color: '#005571', experience: '1+ years' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 95, icon: '🐙', color: '#F05032', experience: '5+ years' },
      { name: 'Docker', level: 85, icon: '🐳', color: '#2496ED', experience: '2+ years' },
      { name: 'AWS', level: 80, icon: '☁️', color: '#FF9900', experience: '2+ years' },
      { name: 'Vercel', level: 88, icon: '▲', color: '#000000', experience: '2+ years' },
      { name: 'Webpack', level: 78, icon: '📦', color: '#8DD6F9', experience: '3+ years' },
      { name: 'Jest', level: 82, icon: '🃏', color: '#C21325', experience: '3+ years' },
      { name: 'Cypress', level: 75, icon: '🌲', color: '#17202C', experience: '2+ years' },
      { name: 'CI/CD', level: 80, icon: '🔄', color: '#326CE5', experience: '2+ years' }
    ]
  };

  // Animate skill bars when component mounts or category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSkills = skillsData[activeCategory];
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, `${activeCategory}-${skill.name}`]));
        }, index * 100);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      setAnimatedSkills(new Set());
    };
  }, [activeCategory, skillsData]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setAnimatedSkills(new Set());
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return '#10b981';
    if (level >= 80) return '#3b82f6';
    if (level >= 70) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <section style={{ padding: '2.5rem 0', background: '#0f172a', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.2rem 1rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '2rem',
            marginBottom: '1rem'
          }}>
            <span style={{
              color: '#10b981',
              fontSize: '0.6rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Expertise
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '800',
            color: '#f8fafc',
            marginBottom: '0.6rem',
            lineHeight: '1.2'
          }}>
            Skills & <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Technologies</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Filter Instructions */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: 'rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.15)',
          borderRadius: '0.75rem',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            color: '#60a5fa',
            fontSize: '0.875rem',
            fontWeight: '500',
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13 3L15 5L9 11L5 15L3 13L1 15L7 21L9 19L11 9L15 5L17 3L21 9Z"/>
            </svg>
            Click any category below to filter and explore different skill sets
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.75rem',
          marginBottom: '3rem',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)'
        }}>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 1rem',
                background: activeCategory === category.id 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.15))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: activeCategory === category.id 
                  ? '2px solid rgba(59, 130, 246, 0.5)'
                  : '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                textAlign: 'center',
                color: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                boxShadow: activeCategory === category.id 
                  ? '0 8px 25px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1) inset'
                  : '0 2px 10px rgba(0, 0, 0, 0.1)',
                transform: activeCategory === category.id ? 'translateY(-2px)' : 'translateY(0)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {/* Click indicator */}
              <div style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                width: '20px',
                height: '20px',
                background: activeCategory === category.id 
                  ? 'rgba(16, 185, 129, 0.8)' 
                  : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                color: activeCategory === category.id ? 'white' : '#94a3b8',
                transition: 'all 0.3s ease'
              }}>
                {activeCategory === category.id ? '✓' : '○'}
              </div>

              {/* Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                background: activeCategory === category.id 
                  ? 'rgba(59, 130, 246, 0.3)' 
                  : 'rgba(59, 130, 246, 0.1)',
                border: `2px solid ${activeCategory === category.id 
                  ? 'rgba(59, 130, 246, 0.5)' 
                  : 'rgba(59, 130, 246, 0.2)'}`,
                borderRadius: '0.75rem',
                color: activeCategory === category.id ? '#60a5fa' : '#3b82f6',
                transition: 'all 0.3s ease'
              }}>
                {category.icon}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  color: activeCategory === category.id ? '#f8fafc' : '#e2e8f0',
                  fontSize: '1rem',
                  fontWeight: '700',
                  margin: '0 0 0.25rem 0',
                  lineHeight: '1.3'
                }}>
                  {category.name}
                </h3>
                <p style={{
                  color: activeCategory === category.id ? '#cbd5e1' : '#94a3b8',
                  fontSize: '0.75rem',
                  lineHeight: '1.4',
                  margin: '0 0 0.5rem 0'
                }}>
                  {category.description}
                </p>
                
                {/* Skills count badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.25rem 0.75rem',
                  background: activeCategory === category.id 
                    ? 'rgba(16, 185, 129, 0.2)' 
                    : 'rgba(16, 185, 129, 0.1)',
                  border: `1px solid ${activeCategory === category.id 
                    ? 'rgba(16, 185, 129, 0.3)' 
                    : 'rgba(16, 185, 129, 0.2)'}`,
                  borderRadius: '1rem',
                  color: activeCategory === category.id ? '#34d399' : '#10b981',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {skillsData[category.id].length} Skills
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {skillsData[activeCategory].map((skill, index) => (
              <div
                key={`${activeCategory}-${skill.name}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  transition: 'all 0.3s ease',
                  opacity: '0',
                  transform: 'translateY(20px)',
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {/* Skill Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    flex: '1'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.5rem',
                      flexShrink: '0'
                    }}>
                      {skill.icon}
                    </div>
                    <div style={{ flex: '1' }}>
                      <h4 style={{
                        color: '#f8fafc',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        lineHeight: '1.3',
                        margin: '0'
                      }}>
                        {skill.name}
                      </h4>
                      <span style={{
                        color: '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: '0' }}>
                    <span style={{
                      display: 'block',
                      fontSize: '0.6rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                      color: getSkillLevelColor(skill.level)
                    }}>
                      {getSkillLevelText(skill.level)}
                    </span>
                    <span style={{
                      color: '#cbd5e1',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      fontFamily: 'Courier New, monospace'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: animatedSkills.has(`${activeCategory}-${skill.name}`) ? `${skill.level}%` : '0',
                      background: `linear-gradient(90deg, ${skill.color}, rgba(255, 255, 255, 0.2))`,
                      borderRadius: '3px',
                      position: 'relative',
                      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  </div>
                </div>

                {/* Skill Tags */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '0.1rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.6rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                    border: `1px solid ${skill.color}40`
                  }}>
                    {getSkillLevelText(skill.level)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          padding: '2rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '30+', label: 'Technologies' },
            { number: '50+', label: 'Projects Completed' },
            { number: '12+', label: 'Certifications' }
          ].map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '1rem 0'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #3b82f6, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                color: '#94a3b8',
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1.5rem',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1rem',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Interested in working together? Let's discuss your project!
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 2rem',
              background: 'linear-gradient(135deg, #3b82f6, #10b981)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >
            <span>Get In Touch</span>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media screen and (max-width: 768px) {
          section {
            padding: 4rem 0 !important;
          }
          
          section > div {
            padding: 0 1rem !important;
          }
          
          section > div > div:first-child {
            margin-bottom: 3rem !important;
          }
          
          section > div > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          
          section > div > div:nth-child(3) button {
            padding: 1rem 0.75rem !important;
            gap: 0.5rem !important;
          }
          
          section > div > div:nth-child(3) button > div:nth-child(2) {
            width: 40px !important;
            height: 40px !important;
          }
          
          section > div > div:nth-child(4) > div {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          section > div > div:nth-child(5) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          
          section > div > div:nth-child(5) > div > div:first-child {
            font-size: 1.5rem !important;
          }
          
          section > div > div:nth-child(5) > div > div:last-child {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsTechnologies;