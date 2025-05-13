import React, { useState } from 'react';
import './DepartmentConditions.css';

const DepartmentConditions = ({ departmentId }) => {
  // Example data - would typically come from an API
  const conditions = [
    {
      id: 1,
      departmentId: 1,
      name: 'Coronary Artery Disease',
      description: 'Narrowing or blockage of coronary arteries that can lead to heart attacks',
      symptoms: [
        'Chest pain (angina)',
        'Shortness of breath',
        'Heart attack'
      ],
      treatments: [
        'Medication',
        'Angioplasty',
        'Bypass surgery'
      ]
    },
    {
      id: 2,
      departmentId: 1,
      name: 'Heart Failure',
      description: 'Condition where the heart cannot pump enough blood to meet the body\'s needs',
      symptoms: [
        'Fatigue',
        'Shortness of breath',
        'Swelling in legs'
      ],
      treatments: [
        'Medication',
        'Lifestyle changes',
        'Cardiac devices'
      ]
    },
    {
      id: 3,
      departmentId: 1,
      name: 'Arrhythmias',
      description: 'Abnormal heart rhythms that can affect heart function',
      symptoms: [
        'Palpitations',
        'Dizziness',
        'Fainting'
      ],
      treatments: [
        'Medication',
        'Ablation',
        'Pacemaker or ICD'
      ]
    },
    {
      id: 4,
      departmentId: 1,
      name: 'Valve Disease',
      description: 'Problems with heart valves that can affect blood flow',
      symptoms: [
        'Fatigue',
        'Shortness of breath',
        'Heart murmur'
      ],
      treatments: [
        'Medication',
        'Valve repair',
        'Valve replacement'
      ]
    }
  ];

  // Filter conditions by department
  const filteredConditions = departmentId 
    ? conditions.filter(condition => condition.departmentId === departmentId)
    : conditions;

  const [expandedCondition, setExpandedCondition] = useState(null);

  const toggleCondition = (id) => {
    setExpandedCondition(expandedCondition === id ? null : id);
  };

  return (
    <div className="conditions-container">
      <h2 className="conditions-heading">Conditions We Treat</h2>
      <p className="conditions-subheading">Our specialists provide expert care for a wide range of medical conditions</p>
      
      <div className="conditions-grid">
        {filteredConditions.map(condition => (
          <div 
            key={condition.id} 
            className={`condition-card ${expandedCondition === condition.id ? 'expanded' : ''}`}
            onClick={() => toggleCondition(condition.id)}
          >
            <div className="condition-header">
              <h3 className="condition-name">{condition.name}</h3>
              <div className="condition-toggle">
                <i className={`feather icon-${expandedCondition === condition.id ? 'minus' : 'plus'}`}></i>
              </div>
            </div>
            
            <div className="condition-content">
              <p className="condition-description">{condition.description}</p>
              
              <div className="condition-details">
                <div className="condition-section">
                  <h4 className="condition-section-title">Common Symptoms</h4>
                  <ul className="condition-list">
                    {condition.symptoms.map((symptom, i) => (
                      <li key={i} className="condition-list-item">{symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="condition-section">
                  <h4 className="condition-section-title">Treatment Options</h4>
                  <ul className="condition-list">
                    {condition.treatments.map((treatment, i) => (
                      <li key={i} className="condition-list-item">{treatment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentConditions;