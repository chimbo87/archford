import React from 'react';
import './SkillsTechnologies.css';

const SkillsTechnologies = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "JavaScript", icon: "📜", level: 85 },
        { name: "TypeScript", icon: "🔷", level: 80 },
        { name: "HTML5", icon: "🖥️", level: 95 },
        { name: "CSS3", icon: "🎨", level: 90 },
        { name: "Tailwind CSS", icon: "🌀", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express", icon: "🚂", level: 80 },
        { name: "Python", icon: "🐍", level: 75 },
        { name: "MongoDB", icon: "🍃", level: 80 },
        { name: "PostgreSQL", icon: "🐘", level: 75 },
        { name: "GraphQL", icon: "📊", level: 70 }
      ]
    },
    {
      category: "Tools & More",
      items: [
        { name: "Git", icon: "🔄", level: 85 },
        { name: "Docker", icon: "🐳", level: 70 },
        { name: "AWS", icon: "☁️", level: 65 },
        { name: "Figma", icon: "✏️", level: 75 },
        { name: "Jest", icon: "🃏", level: 80 },
        { name: "CI/CD", icon: "⚙️", level: 75 }
      ]
    }
  ];

  return (
    <section className="skills-technologies" id="skills">
      <div className="skills-technologies__container">
        <div className="skills-technologies__header">
          <span className="skills-technologies__subtitle">What I Work With</span>
          <h2 className="skills-technologies__title">Skills & Technologies</h2>
          <div className="skills-technologies__divider"></div>
        </div>

        <div className="skills-technologies__grid">
          {skills.map((skillCategory, index) => (
            <div className="skills-technologies__category" key={index}>
              <h3 className="skills-technologies__category-title">
                <span className="skills-technologies__category-icon">{index === 0 ? "💻" : index === 1 ? "🔧" : "🛠️"}</span>
                {skillCategory.category}
              </h3>
              
              <ul className="skills-technologies__list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li className="skills-technologies__item" key={skillIndex}>
                    <div className="skills-technologies__skill-info">
                      <span className="skills-technologies__skill-icon">{skill.icon}</span>
                      <span className="skills-technologies__skill-name">{skill.name}</span>
                      <span className="skills-technologies__skill-level">{skill.level}%</span>
                    </div>
                    <div className="skills-technologies__progress-bar">
                      <div 
                        className="skills-technologies__progress-fill" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTechnologies;