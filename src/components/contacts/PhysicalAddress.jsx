import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './PhysicalAddress.css';

const PhysicalAddress = () => {
  return (
    <div className="address-container">
      <div className="address-content">
        <div className="address-info">
          <MapPin className="address-icon" />
          <div>
            <h2>Visit Our Clinic</h2>
            <p className="address-line">123 Healing Avenue</p>
            <p className="address-line">Medical District, City 12345</p>
            <p className="address-line">State, Country</p>
          </div>
        </div>
        
        <div className="address-directions">
          <Navigation className="directions-icon" />
          <div>
            <h3>Directions</h3>
            <div className="directions-tabs">
              <div className="directions-content">
                <h4>From Downtown</h4>
                <ol>
                  <li>Take Main Street north for 2 miles</li>
                  <li>Turn right onto Healthcare Boulevard</li>
                  <li>Continue for 0.5 miles</li>
                  <li>Our clinic will be on your left, across from Central Park</li>
                </ol>
              </div>
              
              <div className="directions-content">
                <h4>From the Highway</h4>
                <ol>
                  <li>Take Exit 25B from Highway 101</li>
                  <li>Turn right onto Medical Parkway</li>
                  <li>At the second light, turn left onto Healing Avenue</li>
                  <li>The clinic is 500 feet ahead on the right side</li>
                </ol>
              </div>
              
              <div className="directions-content">
                <h4>Public Transportation</h4>
                <ul>
                  <li>Bus Routes 15 and 22 stop directly in front of our clinic</li>
                  <li>City Metro: Exit at Medical Center Station, then walk 2 blocks east</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="address-action">
        <a 
          href="https://maps.google.com/?q=123+Healing+Avenue,City,State,12345" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="directions-button"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default PhysicalAddress;