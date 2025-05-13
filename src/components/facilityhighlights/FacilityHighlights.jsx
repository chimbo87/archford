import React from 'react';
import './FacilityHighlights.css';
import { Building, Stethoscope, Clock,  Shield, Award } from 'lucide-react';

const FacilityHighlights = () => {
  const highlights = [
    {
      icon: <Stethoscope size={28} />,
      title: "State-of-the-Art Equipment",
      description: "Advanced medical technology for accurate diagnostics and treatment"
    },
    {
      icon: <Clock size={28} />,
      title: "Extended Hours",
      description: "Convenient appointment times including evenings and weekends"
    },
    {
      icon: <Shield size={28} />,
      title: "Accessibility",
      description: "Fully accessible facility with accommodations for all patients"
    },
    {
      icon: <Shield size={28} />,
      title: "Insurance Accepted",
      description: "We work with most major insurance providers"
    },
    {
      icon: <Building size={28} />,
      title: "Modern Facility",
      description: "Comfortable environment designed with patient care in mind"
    },
    {
      icon: <Award size={28} />,
      title: "Board-Certified Staff",
      description: "Experienced medical professionals committed to excellence"
    }
  ];

  return (
    <div className="facility-highlights-container">
      <h2 className="facility-section-title">Our Facility Highlights</h2>
      <p className="facility-section-subtitle">Experience healthcare excellence with our comprehensive services and features</p>
      
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div className="highlight-card" key={index}>
            <div className="highlight-icon">
              {highlight.icon}
            </div>
            <h3 className="highlight-title">{highlight.title}</h3>
            <p className="highlight-description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityHighlights;