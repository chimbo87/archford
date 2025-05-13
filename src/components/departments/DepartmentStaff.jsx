import React from 'react';
import './DepartmentStaff.css';
import person from "../../assets/person02.jpeg";

const DepartmentStaff = ({ departmentId }) => {
  // This would typically come from an API or props
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Department Head',
      credentials: 'MD, PhD, FACC',
      photo:  person,
      specialization: 'Interventional Cardiology',
      departmentId: 1
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      position: 'Senior Physician',
      credentials: 'MD, FACC',
      photo:  person,
      specialization: 'Cardiac Electrophysiology',
      departmentId: 1
    },
    {
      id: 3,
      name: 'Dr. Lisa Patel',
      position: 'Specialist',
      credentials: 'MD, FACC',
      photo:  person,
      specialization: 'Preventive Cardiology',
      departmentId: 1
    }
  ];

  // Filter staff members by department
  const filteredStaff = departmentId 
    ? staffMembers.filter(staff => staff.departmentId === departmentId)
    : staffMembers;

  return (
    <div className="staff-container">
      <h2 className="staff-heading">Our Specialists</h2>
      <p className="staff-subheading">Meet our expert medical professionals</p>
      
      <div className="staff-grid">
        {filteredStaff.map(staff => (
          <div key={staff.id} className="staff-card">
            <div className="staff-photo-container">
              <img 
                src={staff.photo} 
                alt={`Dr. ${staff.name}`} 
                className="staff-photo" 
              />
            </div>
            <div className="staff-info">
              <h3 className="staff-name">{staff.name}</h3>
              <p className="staff-position">{staff.position}</p>
              <p className="staff-credentials">{staff.credentials}</p>
              <p className="staff-specialization">{staff.specialization}</p>
              <a href={`/staff/${staff.id}`} className="staff-profile-link">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStaff;