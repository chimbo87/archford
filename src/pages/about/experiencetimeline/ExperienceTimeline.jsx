import React from 'react';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Lead the frontend development team, architecting scalable React applications and mentoring junior developers.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      )
    },
    {
      type: 'education',
      title: 'MSc Computer Science',
      institution: 'State University',
      period: '2019 - 2021',
      description: 'Specialized in Human-Computer Interaction and Web Technologies. Thesis on Progressive Web App performance.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      )
    },
    {
      type: 'certification',
      title: 'AWS Certified Developer',
      institution: 'Amazon Web Services',
      period: '2020',
      description: 'Demonstrated proficiency in developing and maintaining AWS-based applications.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      period: '2018 - 2021',
      description: 'Developed responsive web applications using React and Redux, collaborating with UX designers.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      )
    },
    {
      type: 'education',
      title: 'BSc Software Engineering',
      institution: 'City College',
      period: '2015 - 2019',
      description: 'Graduated with honors. Focused on web development and software architecture.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="et-container">
      <div className="et-content">
        <div className="et-header">
          <h2 className="et-title">Professional Journey</h2>
          <div className="et-divider"></div>
          <p className="et-subtitle">My career path, education, and certifications</p>
        </div>

        <div className="et-timeline">
          {experiences.map((exp, index) => (
            <div className={`et-item et-${exp.type}`} key={index}>
              <div className="et-item-icon">
                {exp.icon}
              </div>
              <div className="et-item-content">
                <div className="et-item-period">{exp.period}</div>
                <h3 className="et-item-title">{exp.title}</h3>
                <h4 className="et-item-subtitle">
                  {exp.company || exp.institution}
                </h4>
                <p className="et-item-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;