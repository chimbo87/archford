
import './AccessibilityInfo.css'
import banner01 from "../../assets/med18.jpeg";

export function AccessibilityInfo() {
    return (
      <section className="accessibility-section">
        <div className="accessibility-content">
          <div className="accessibility-text">
            <h2>Accessibility for All</h2>
            <p>We are committed to making our facility accessible to every patient and visitor.</p>
            
            <div className="accessibility-features">
              <div className="feature">
                <div className="feature-icon">♿</div>
                <div className="feature-text">
                  <h4>Wheelchair Access</h4>
                  <p>Wide doorways, ramps, and accessible restrooms throughout the facility.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">👂</div>
                <div className="feature-text">
                  <h4>Hearing Assistance</h4>
                  <p>Hearing loop system and staff trained in sign language basics.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">👁️</div>
                <div className="feature-text">
                  <h4>Visual Assistance</h4>
                  <p>Braille signage, large print materials, and staff available to guide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="accessibility-image">
            <img src={banner01} alt="Accessible clinic entrance with ramp" />
          </div>
        </div>
      </section>
    );
  }