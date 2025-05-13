import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-vision-header">
          <h2>About Us</h2>
          <p>
            Our mission and vision statements define who we are and what we
            strive to achieve
          </p>
        </div>

        <div className="mission-vision-cards">
          <div className="mission-card">
            <div className="card-icon">
              <svg
                viewBox="0 0 24 24"
                width="36"
                height="36"
                stroke="#1A6CBD"
                strokeWidth="2"
                fill="none"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              {" "}
              To provide outstanding patient centred Compassionate, accessible,
              high quality cost effective healthcare to the community and
              Zimbabwe at large
            </p>
          </div>

          <div className="vision-card">
            <div className="card-icon">
              <svg
                viewBox="0 0 24 24"
                width="36"
                height="36"
                stroke="#36B37E"
                strokeWidth="2"
                fill="none"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the best we can possibly be. As a leader in innovation,
              caring and personalized healthcare. Our goal is to be the best and
              accessible clinic in Zimbabwe
            </p>
          </div>
        </div>

        {/* <div className="strategic-goals">
          <h3>Strategic Priorities</h3>
          <div className="goals-grid">
            <div className="goal-item">
              <span className="goal-number">01</span>
              <h4>Patient-Centered Care</h4>
              <p>Putting patients first in all decisions</p>
            </div>

            <div className="goal-item">
              <span className="goal-number">02</span>
              <h4>Clinical Excellence</h4>
              <p>Pursuing the highest standards in healthcare</p>
            </div>

            <div className="goal-item">
              <span className="goal-number">03</span>
              <h4>Innovation</h4>
              <p>Embracing new approaches and technologies</p>
            </div>

            <div className="goal-item">
              <span className="goal-number">04</span>
              <h4>Community Wellness</h4>
              <p>Promoting health beyond our clinic walls</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MissionVision;
