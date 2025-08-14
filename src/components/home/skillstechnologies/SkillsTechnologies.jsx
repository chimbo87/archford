import React, { useState, useEffect } from "react";
import "./SkillsTechnologies.css";

const SkillsTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z" />
        </svg>
      ),
      description: "Creating responsive and interactive user interfaces",
    },
    {
      id: "backend",
      name: "Backend",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H9V19H8V21H16V19H15V18H20Z" />
        </svg>
      ),
      description: "Building robust server-side applications and APIs",
    },
    {
      id: "database",
      name: "Database",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
        </svg>
      ),
      description: "Designing and managing data storage solutions",
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z" />
        </svg>
      ),
      description: "Development tools and deployment workflows",
    },
  ];

  const skillsData = {
    frontend: [
      {
        name: "React",
        level: 95,
        icon: "⚛️",
        color: "#61DAFB",
        experience: "4+ years",
      },
      {
        name: "JavaScript (ES6+)",
        level: 92,
        icon: "🟨",
        color: "#F7DF1E",
        experience: "5+ years",
      },
      {
        name: "TypeScript",
        level: 88,
        icon: "🔷",
        color: "#3178C6",
        experience: "3+ years",
      },
      {
        name: "Next.js",
        level: 90,
        icon: "▲",
        color: "#000000",
        experience: "2+ years",
      },
      {
        name: "HTML5",
        level: 95,
        icon: "🌐",
        color: "#E34F26",
        experience: "6+ years",
      },
      {
        name: "CSS3/SASS",
        level: 92,
        icon: "🎨",
        color: "#1572B6",
        experience: "5+ years",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: "💨",
        color: "#06B6D4",
        experience: "2+ years",
      },
      {
        name: "Vue.js",
        level: 75,
        icon: "💚",
        color: "#4FC08D",
        experience: "1+ years",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 90,
        icon: "🟢",
        color: "#339933",
        experience: "4+ years",
      },
      {
        name: "Express.js",
        level: 88,
        icon: "🚀",
        color: "#000000",
        experience: "4+ years",
      },
      {
        name: "Python",
        level: 85,
        icon: "🐍",
        color: "#3776AB",
        experience: "3+ years",
      },
      {
        name: "Django",
        level: 80,
        icon: "🔥",
        color: "#092E20",
        experience: "2+ years",
      },
      {
        name: "FastAPI",
        level: 82,
        icon: "⚡",
        color: "#009688",
        experience: "2+ years",
      },
      {
        name: "GraphQL",
        level: 78,
        icon: "📊",
        color: "#E10098",
        experience: "2+ years",
      },
      {
        name: "REST APIs",
        level: 92,
        icon: "🔌",
        color: "#FF6B35",
        experience: "4+ years",
      },
      {
        name: "Microservices",
        level: 75,
        icon: "🏗️",
        color: "#4A90E2",
        experience: "2+ years",
      },
    ],
    database: [
      {
        name: "MongoDB",
        level: 88,
        icon: "🍃",
        color: "#47A248",
        experience: "3+ years",
      },
      {
        name: "PostgreSQL",
        level: 85,
        icon: "🐘",
        color: "#336791",
        experience: "3+ years",
      },
      {
        name: "MySQL",
        level: 82,
        icon: "🗄️",
        color: "#4479A1",
        experience: "3+ years",
      },
      {
        name: "Redis",
        level: 80,
        icon: "🔴",
        color: "#DC382D",
        experience: "2+ years",
      },
      {
        name: "Firebase",
        level: 78,
        icon: "🔥",
        color: "#FFCA28",
        experience: "2+ years",
      },
      {
        name: "Prisma",
        level: 75,
        icon: "⚪",
        color: "#2D3748",
        experience: "1+ years",
      },
      {
        name: "Elasticsearch",
        level: 70,
        icon: "🔍",
        color: "#005571",
        experience: "1+ years",
      },
    ],
    tools: [
      {
        name: "Git/GitHub",
        level: 95,
        icon: "🐙",
        color: "#F05032",
        experience: "5+ years",
      },
      {
        name: "Docker",
        level: 85,
        icon: "🐳",
        color: "#2496ED",
        experience: "2+ years",
      },
      {
        name: "AWS",
        level: 80,
        icon: "☁️",
        color: "#FF9900",
        experience: "2+ years",
      },
      {
        name: "Vercel",
        level: 88,
        icon: "▲",
        color: "#000000",
        experience: "2+ years",
      },
      {
        name: "Webpack",
        level: 78,
        icon: "📦",
        color: "#8DD6F9",
        experience: "3+ years",
      },
      {
        name: "Jest",
        level: 82,
        icon: "🃏",
        color: "#C21325",
        experience: "3+ years",
      },
      {
        name: "Cypress",
        level: 75,
        icon: "🌲",
        color: "#17202C",
        experience: "2+ years",
      },
      {
        name: "CI/CD",
        level: 80,
        icon: "🔄",
        color: "#326CE5",
        experience: "2+ years",
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSkills = skillsData[activeCategory];
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(
            (prev) => new Set([...prev, `${activeCategory}-${skill.name}`])
          );
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
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "#10b981";
    if (level >= 80) return "#3b82f6";
    if (level >= 70) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        {/* Section Header */}
        <div className="skills__header">
          <div className="skills__label">
            <span className="skills__label-text">Expertise</span>
          </div>
          <h2 className="skills__title">
            Skills &{" "}
            <span className="skills__title-highlight">Technologies</span>
          </h2>
          <p className="skills__subtitle">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Category Navigation - Redesigned for better UX */}
        <div className="skills__categories-wrapper">
          <h3 className="skills__categories-title">Filter by category:</h3>
          <div className="skills__categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`skills__category ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category.id)}
                aria-label={`Show ${category.name} skills`}
                aria-pressed={activeCategory === category.id}
              >
                <div className="skills__category-icon">{category.icon}</div>
                <div className="skills__category-info">
                  <h3 className="skills__category-name">{category.name}</h3>
                  <p className="skills__category-desc">
                    {category.description}
                  </p>
                </div>
                <div className="skills__category-count">
                  {skillsData[category.id].length}
                </div>
                <div className="skills__category-indicator"></div>
              </button>
            ))}
          </div>
        </div>
        <div className="skills_results_wrap">
          <p>
            <span></span>Results<span></span>
          </p>
        </div>
        {/* Skills Grid */}
        <div className="skills__content">
          <div className="skills__grid">
            {skillsData[activeCategory].map((skill, index) => (
              <div
                key={`${activeCategory}-${skill.name}`}
                className="skills__item"
                style={{ "--delay": `${index * 0.1}s` }}
              >
                {/* Skill Header */}
                <div className="skills__item-header">
                  <div className="skills__item-info">
                    <div className="skills__item-icon">{skill.icon}</div>
                    <div className="skills__item-details">
                      <h4 className="skills__item-name">{skill.name}</h4>
                      <span className="skills__item-experience">
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                  <div className="skills__item-level">
                    <span
                      className="skills__level-text"
                      style={{ color: getSkillLevelColor(skill.level) }}
                    >
                      {getSkillLevelText(skill.level)}
                    </span>
                    <span className="skills__level-percentage">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="skills__progress">
                  <div className="skills__progress-track">
                    <div
                      className={`skills__progress-fill ${
                        animatedSkills.has(`${activeCategory}-${skill.name}`)
                          ? "animated"
                          : ""
                      }`}
                      style={{
                        "--skill-level": `${skill.level}%`,
                        "--skill-color": skill.color,
                        "--skill-glow": `${skill.color}40`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="skills__item-tags">
                  <span
                    className="skills__proficiency-tag"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                      borderColor: `${skill.color}40`,
                    }}
                  >
                    {getSkillLevelText(skill.level)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary Stats */}
        <div className="skills__stats">
          <div className="skills__stat">
            <div className="skills__stat-number">5+</div>
            <div className="skills__stat-label">Years Experience</div>
          </div>
          <div className="skills__stat">
            <div className="skills__stat-number">30+</div>
            <div className="skills__stat-label">Technologies</div>
          </div>
          <div className="skills__stat">
            <div className="skills__stat-number">50+</div>
            <div className="skills__stat-label">Projects Completed</div>
          </div>
          <div className="skills__stat">
            <div className="skills__stat-number">12+</div>
            <div className="skills__stat-label">Certifications</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills__cta">
          <p className="skills__cta-text">
            Interested in working together? Let's discuss your project!
          </p>
          <a href="#contact" className="skills__cta-button">
            <span>Get In Touch</span>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsTechnologies;
