import './FacilityInfo.css'

export function FacilityInfo() {
    return (
      <section className="facility-info">
        <div className="facility-header">
          <h2>Our Facility</h2>
          <p className="facility-description">
            Designed with patient comfort and care in mind, our clinic offers a welcoming environment with specialized areas for comprehensive healthcare services.
          </p>
        </div>
        
        <div className="facility-stats">
          <div className="stat-item">
            <span className="stat-number">5,000</span>
            <span className="stat-label">Square Feet</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">Exam Rooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Procedure Rooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Physical Therapy Area</span>
          </div>
        
        </div>
        
        <div className="specialized-areas">
          <h3>Specialized Areas</h3>
          <ul>
            <li>Pediatric Care Center</li>
            <li>Women's Health Suite</li>
            <li>Cardiac Assessment Room</li>
            <li>On-Site Laboratory</li>
            <li>Minor Procedure Suite</li>
            <li>Medical Imaging</li>
          </ul>
        </div>
      </section>
    );
  }