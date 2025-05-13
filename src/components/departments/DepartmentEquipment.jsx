import React from 'react';
import banner01 from "../../assets/med02.jpeg";  
import banner02 from "../../assets/med03.jpeg"; 
import banner03 from "../../assets/med04.jpeg"; 
import banner04 from "../../assets/med05.jpeg"; 
import './DepartmentEquipment.css';

const DepartmentEquipment = ({ departmentId }) => {
  // Example data - would typically come from an API
  const equipment = [
    {
      id: 1,
      departmentId: 1,
      name: 'Cardiac MRI',
      description: 'Advanced imaging system for detailed heart structure analysis',
      image: banner01,
      features: [
        'Non-invasive diagnostic tool',
        'Provides detailed 3D images',
        'Helps detect coronary artery disease'
      ]
    },
    {
      id: 2,
      departmentId: 1,
      name: 'Echocardiography Machine',
      description: 'State-of-the-art ultrasound technology for heart visualization',
      image:  banner02,
      features: [
        'Real-time heart imaging',
        'Evaluates heart valve function',
        'Measures blood flow and cardiac output'
      ]
    },
    {
      id: 3,
      departmentId: 1,
      name: 'Holter Monitor',
      description: 'Portable device for continuous heart rhythm monitoring',
      image:  banner03,
      features: [
        '24-72 hour continuous recording',
        'Detects arrhythmias',
        'Wireless data transmission'
      ]
    }
  ];

  // Filter equipment by department
  const filteredEquipment = departmentId 
    ? equipment.filter(item => item.departmentId === departmentId)
    : equipment;

  return (
    <div className="equipment-container">
      <h2 className="equipment-heading">Advanced Technology</h2>
      <p className="equipment-subheading">Our cutting-edge medical equipment ensures precise diagnosis and treatment</p>
      
      {filteredEquipment.map((item, index) => (
        <div key={item.id} className={`equipment-item ${index % 2 === 0 ? '' : 'equipment-reverse'}`}>
          <div className="equipment-image-container">
            <img src={item.image} alt={item.name} className="equipment-image" />
          </div>
          <div className="equipment-details">
            <h3 className="equipment-name">{item.name}</h3>
            <p className="equipment-description">{item.description}</p>
            <ul className="equipment-features">
              {item.features.map((feature, i) => (
                <li key={i} className="equipment-feature">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentEquipment;