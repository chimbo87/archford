import React, { useState } from 'react';
import person from "../../assets/person02.jpeg";
import person01 from "../../assets/person.jpeg";
import './LeadershipTeam.css';

const LeadershipTeam = () => {
  const [activeLeader, setActiveLeader] = useState(null);
  
  const leaders = [
    {
      id: 1,
      name: "Dr. S Maforo",
      role: "Medical Director",
      image: person01,
      bio: "Dr. Johnson brings over 20 years of experience in family medicine. Board-certified and dedicated to patient-centered care, he leads our clinical team with compassion and expertise.",
      specialty: "Family Medicine",
      education: "University Of Zimbabwe"
    },
    {
      id: 2,
      name: "Dr. Michael D",
      role: "Chief of Cardiology",
      image: person,
      bio: "As our cardiology specialist, Dr. Chen has pioneered innovative treatments and patient care protocols. His research has been published in leading medical journals.",
      specialty: "Cardiology",
      education: "Johns Hopkins University"
    },
    {
      id: 3,
      name: "Dr. Priya P",
      role: "Pediatrics Lead",
      image: person,
      bio: "Dr. Patel specializes in pediatric care with a focus on developmental health. Her gentle approach makes her a favorite among our youngest patients and their families.",
      specialty: "Pediatrics",
      education: "University of Pennsylvania"
    },
    {
      id: 4,
      name: "Amanda T",
      role: "Clinic Administrator",
      image: person01,
      bio: "With a background in healthcare administration and patient advocacy, Amanda ensures our clinic runs smoothly while maintaining our commitment to exceptional patient care.",
      specialty: "Healthcare Administration",
      education: "Yale University"
    }
  ];

  const handleLeaderClick = (id) => {
    setActiveLeader(activeLeader === id ? null : id);
  };

  return (
    <div className="leadership-team-container">
      <h2 className="leadership-section-title">Meet Our Leadership Team</h2>
      <p className="leadership-section-subtitle">Experienced healthcare professionals dedicated to your wellbeing</p>
      
      <div className="leadership-grid">
        {leaders.map((leader) => (
          <div 
            className={`leader-card ${activeLeader === leader.id ? 'active' : ''}`} 
            key={leader.id}
            onClick={() => handleLeaderClick(leader.id)}
          >
            <div className="leader-image-container">
              <img src={leader.image} alt={leader.name} className="leader-image" />
            </div>
            <div className="leader-info">
              <h3 className="leader-name">{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
              
              <div className="leader-details">
                <p className="leader-bio">{leader.bio}</p>
                <div className="leader-credentials">
                  <p><strong>Specialty:</strong> {leader.specialty}</p>
                  <p><strong>Education:</strong> {leader.education}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;