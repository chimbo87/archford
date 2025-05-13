import './MapsDirections.css';
import banner from "../../assets/images/homebanner.jpg";

export function MapsDirections() {
    return (
      <section className="maps-section">
        <div className="maps-container">
          <div className="maps-text">
            <h2>Location & Directions</h2>
            <p className="clinic-address">
            1741 Lobengula Street <br />
              Suite 400<br />
              Ruwa Harare
            </p>
            
            <div className="directions-info">
              <h3>Getting Here</h3>
              <p>We're conveniently located in Ruwa Harare Medical Complex, just off Mutare Highway.</p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">+26377 484 3841</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Hours:</span>
                  <span className="contact-value">Mon-Fri: 8am-6pm, Sat: 9am-1pm</span>
                </div>
              </div>
              
              {/* <button className="get-directions">
                Get Directions
              </button> */}
            </div>
          </div>
          
          <div className="map-embed">
            {/* Replace with your actual map embed code */}
            <div className="map-placeholder">
              <img src={banner} alt="Clinic location map" />
            </div>
          </div>
        </div>
      </section>
    );
  }