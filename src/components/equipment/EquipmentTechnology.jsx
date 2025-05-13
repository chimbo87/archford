import React, { useState } from 'react';
import './EquipmentTechnology.css';

const EquipmentTechnology = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const equipment = [
    {
      id: 1,
      name: "MRI Scanner",
      category: "imaging",
      description: "High-resolution magnetic resonance imaging for detailed soft tissue diagnostics.",
      icon: "🔍"
    },
    {
      id: 2,
      name: "Digital X-Ray System",
      category: "imaging",
      description: "Advanced digital radiography with minimal radiation exposure.",
      icon: "📡"
    },
    {
      id: 3,
      name: "ECG Monitor",
      category: "cardiology",
      description: "12-lead electrocardiogram for comprehensive heart monitoring.",
      icon: "💓"
    },
    {
      id: 4,
      name: "Ultrasound Machine",
      category: "imaging",
      description: "Next-generation ultrasound technology for clear, real-time imaging.",
      icon: "🔊"
    },
    {
      id: 5,
      name: "Laboratory Analyzers",
      category: "laboratory",
      description: "State-of-the-art equipment for quick and accurate lab results.",
      icon: "🧪"
    },
    // {
    //   id: 6,
    //   name: "Patient Monitoring System",
    //   category: "monitoring",
    //   description: "Continuous vital signs monitoring with cloud-based data storage.",
    //   icon: "📊"
    // }
  ];

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'imaging', name: 'Imaging Technology' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'laboratory', name: 'Laboratory' },
    { id: 'monitoring', name: 'Monitoring Systems' }
  ];

  const filteredEquipment = activeCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeCategory);

  return (
    <section className="equipment-section">
      <div className="equipment-container">
        <div className="section-header">
          <h2>Our Advanced Medical Equipment</h2>
          <p>We invest in the latest technology to provide you with the best possible care</p>
        </div>

        {/* <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        <div className="equipment-grid">
          {filteredEquipment.map(item => (
            <div className="equipment-card" key={item.id}>
              <div className="equipment-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentTechnology;