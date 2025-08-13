import React from 'react';
import './PersonalStory.css';

const PersonalStory = () => {
  return (
    <section className="ps-container">
      <div className="ps-content">
        <div className="ps-header">
          <h2 className="ps-title">My Journey into Development</h2>
          <div className="ps-divider"></div>
          <p className="ps-subtitle">From curiosity to career - the story behind the code</p>
        </div>

        <div className="ps-timeline">
          <div className="ps-timeline-item">
            <div className="ps-timeline-card">
              <div className="ps-timeline-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="ps-timeline-year">2015</h3>
              <h4 className="ps-timeline-title">The Beginning</h4>
              <p className="ps-timeline-desc">
                My first encounter with code - simple HTML and CSS to customize my blog. Instantly fascinated by how lines of text could create visual experiences.
              </p>
            </div>
          </div>

          <div className="ps-timeline-item">
            <div className="ps-timeline-card">
              <div className="ps-timeline-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
              <h3 className="ps-timeline-year">2017</h3>
              <h4 className="ps-timeline-title">Diving Deeper</h4>
              <p className="ps-timeline-desc">
                Started learning JavaScript seriously. Built my first interactive projects - simple games and web apps that made me fall in love with programming logic.
              </p>
            </div>
          </div>

          <div className="ps-timeline-item">
            <div className="ps-timeline-card">
              <div className="ps-timeline-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </div>
              <h3 className="ps-timeline-year">2019</h3>
              <h4 className="ps-timeline-title">Formal Education</h4>
              <p className="ps-timeline-desc">
                Enrolled in computer science courses. Learned data structures, algorithms, and the fundamentals that transformed me from a hobbyist to a professional.
              </p>
            </div>
          </div>

          <div className="ps-timeline-item">
            <div className="ps-timeline-card">
              <div className="ps-timeline-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="ps-timeline-year">2021</h3>
              <h4 className="ps-timeline-title">First Professional Role</h4>
              <p className="ps-timeline-desc">
                Landed my first developer job. The real learning began - collaborating with teams, understanding production code, and solving real-world problems.
              </p>
            </div>
          </div>

          <div className="ps-timeline-item">
            <div className="ps-timeline-card">
              <div className="ps-timeline-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                </svg>
              </div>
              <h3 className="ps-timeline-year">Present</h3>
              <h4 className="ps-timeline-title">Continuous Growth</h4>
              <p className="ps-timeline-desc">
                Expanding my skills daily. Currently passionate about React, modern web architectures, and creating intuitive user experiences that make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;