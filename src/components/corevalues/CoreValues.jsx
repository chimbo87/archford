import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Compassion",
      description: "We approach every patient with empathy and understanding, recognizing their unique needs beyond just medical treatment.",
      icon: "❤️"
    },
    {
      id: 2,
      title: "Excellence",
      description: "We are committed to the highest standards of medical care, continuously improving our skills and knowledge.",
      icon: "⭐"
    },
    {
      id: 3,
      title: "Integrity",
      description: "We act with honesty and transparency in all our interactions, building trust with patients and colleagues.",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working together with patients and professionals.",
      icon: "🤝"
    },
    {
      id: 5,
      title: "Innovation",
      description: "We embrace advances in medical science and technology to deliver cutting-edge healthcare solutions.",
      icon: "💡"
    },
    {
      id: 6,
      title: "Respect",
      description: "We honor the dignity, diversity, and individual needs of patients, families, and our healthcare team.",
      icon: "🌟"
    }
  ];

  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <div className="section-intro">
          <h2>Our Core Values & Philosophy</h2>
          <div className="intro-content">
            <p>Our approach to healthcare is guided by a set of core values that define every aspect of our practice and a philosophy centered on treating the whole person, not just their symptoms.</p>
            <div className="philosophy-highlight">
              <h3>Philosophy of Care</h3>
              <p>We believe in a holistic approach that addresses physical, emotional, and social dimensions of health. Our care is personalized, preventive, and partnership-based, recognizing that each patient's journey is unique.</p>
            </div>
          </div>
        </div>
        
        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.id}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* <div className="care-approach">
          <div className="approach-content">
            <h3>Our Patient-Centered Approach</h3>
            <ul className="approach-list">
              <li>
                <span className="approach-icon">✓</span>
                <div className="approach-text">
                  <h4>Personalized Treatment Plans</h4>
                  <p>Tailored to your unique health needs and goals</p>
                </div>
              </li>
              <li>
                <span className="approach-icon">✓</span>
                <div className="approach-text">
                  <h4>Preventive Focus</h4>
                  <p>Emphasis on preventing illness before it occurs</p>
                </div>
              </li>
              <li>
                <span className="approach-icon">✓</span>
                <div className="approach-text">
                  <h4>Shared Decision-Making</h4>
                  <p>Involving you as an active participant in your healthcare</p>
                </div>
              </li>
              <li>
                <span className="approach-icon">✓</span>
                <div className="approach-text">
                  <h4>Continuous Support</h4>
                  <p>Ongoing care coordination throughout your health journey</p>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CoreValues;