import React from "react";
import { MapPin } from "lucide-react";
import "./InteractiveMap.css";

const InteractiveMap = () => {
  return (
    <div className="map-container">
      <h2>Find Us</h2>
      <div className="map-content">
        <div className="map-wrapper">
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243081.43784661609!2d31.024704!3d-17.8317207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931beff980a8e59%3A0x651100b6b1b57de7!2sLobengula!5e0!3m2!1sen!2sza!4v1746019251365!5m2!1sen!2sza"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mitral Clinic Location"
          />
        </div>
        <div className="map-info">
          <div className="map-address">
            <MapPin className="map-icon" />
            <div>
              <h3>Our Location</h3>
              <p>1741 Lobengula Street</p>
              <p>Ruwa</p>
           
            </div>
          </div>
          <div className="map-directions">
            <h3>Getting Here</h3>
            <ul>
              <li>
                From Harare CBD follow Mutare Road to Ruwa
              </li>
              <li>Public Transit: Routes Mutare Road</li>
              <li>
                Parking: Free parking available in the Complex
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
