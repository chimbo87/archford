import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import "./DepartmentContact.css";

const DepartmentContact = ({ department }) => {
  // Default data if no department prop is provided
  const defaultDepartment = {
    name: "Cardiology Department",
    phone: "+26377 484 3841",
    email: "info@mitralclinic.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    address: "1741 Lobengula Street, Ruwa Harare",
    location: "Ruwa Harare, Zimbabwe",
  };

  // Use provided department data or default
  const { name, phone, email, hours, location, address } =
    department || defaultDepartment;

  return (
    <div className="department-contact-container">
      <div className="department-contact-header">
        <h2>{name}</h2>
        <div className="department-contact-divider"></div>
      </div>

      <div className="department-contact-content">
        <div className="contact-item">
          <div className="contact-icon">
            <Phone size={20} />
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>{phone}</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <Mail size={20} />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>{email}</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <Clock size={20} />
          </div>
          <div className="contact-info">
            <h3>Hours</h3>
            <p>{hours}</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <MapPin size={20} />
          </div>
          <div className="contact-info">
            <h3>Location</h3>
          
            <p className="address">{address}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentContact;
