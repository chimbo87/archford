import React from 'react';
import { 
  FaHeartbeat, 
  FaBrain, 
  FaBone, 
  FaBaby, 
  FaEye, 
  FaNotesMedical 
} from 'react-icons/fa';
import './DepartmentList.css';

const DepartmentList = () => {
  const departments = [
    { 
      id: 1, 
      name: 'Cardiology', 
      icon: <FaHeartbeat size={24} />, 
      description: 'Specialized care for heart conditions and cardiovascular health'
    },
    { 
      id: 2, 
      name: 'Neurology', 
      icon: <FaBrain size={24} />, 
      description: 'Diagnosis and treatment of disorders of the nervous system'
    },
    { 
      id: 3, 
      name: 'Orthopedics', 
      icon: <FaBone size={24} />, 
      description: 'Care for bones, joints, ligaments, tendons, and muscles'
    },
    { 
      id: 4, 
      name: 'Pediatrics', 
      icon: <FaBaby size={24} />, 
      description: 'Comprehensive healthcare for infants, children, and adolescents'
    },
    { 
      id: 5, 
      name: 'Ophthalmology', 
      icon: <FaEye size={24} />, 
      description: 'Specialized care for eye and vision health'
    },
    { 
      id: 6, 
      name: 'Dermatology', 
      icon: <FaNotesMedical size={24} />, 
      description: 'Treatment for skin, hair, and nail conditions'
    },
  ];

  return (
    <div className="departments-container">
      <h2 className="departments-title">Our Medical Departments</h2>
      <p className="departments-subtitle">Comprehensive care across multiple specialties</p>
      
      <div className="departments-grid">
        {departments.map(dept => (
          <div key={dept.id} className="department-card">
            <div className="department-icon">
              {dept.icon}
            </div>
            <h3 className="department-name">{dept.name}</h3>
            <p className="department-description">{dept.description}</p>
            <a href={`/departments/${dept.id}`} className="department-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;