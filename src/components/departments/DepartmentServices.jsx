import React from 'react';
import './DepartmentServices.css';

const DepartmentServices = ({ departmentId }) => {
  // Example data - would typically come from an API
  const services = [
    {
      id: 1,
      departmentId: 1,
      title: 'Cardiac Consultation',
      description: 'Comprehensive evaluation of heart health with our cardiac specialists',
      icon: 'heart'
    },
    {
      id: 2,
      departmentId: 1,
      title: 'Echocardiogram',
      description: 'Non-invasive ultrasound imaging to visualize heart function and structure',
      icon: 'activity'
    },
    {
      id: 3,
      departmentId: 1,
      title: 'Coronary Angiography',
      description: 'Advanced imaging to detect blockages in coronary arteries',
      icon: 'trending-up'
    },
    {
      id: 4,
      departmentId: 1,
      title: 'Stress Testing',
      description: 'Evaluating heart function during physical exertion',
      icon: 'zap'
    }
  ];

  // Filter services by department
  const filteredServices = departmentId 
    ? services.filter(service => service.departmentId === departmentId)
    : services;

  return (
    <div className="services-container">
      <h2 className="services-heading">Specialized Services</h2>
      <p className="services-subheading">Discover our comprehensive range of medical services</p>
      
      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <i className={`feather icon-${service.icon}`}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href={`/services/${service.id}`} className="service-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentServices;