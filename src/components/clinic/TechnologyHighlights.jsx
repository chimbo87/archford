import './TechnologyHighlights.css'
export function TechnologyHighlights() {
    return (
      <section className="technology-section">
        <div className="tech-header">
          <h2>Advanced Technology & Equipment</h2>
          <p>We invest in cutting-edge medical technology to provide accurate diagnoses and effective treatments.</p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">💠</div>
            <h3>Digital Imaging</h3>
            <p>High-resolution digital X-ray and ultrasound equipment for precise diagnostics.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">🖥️</div>
            <h3>Electronic Health Records</h3>
            <p>Secure, integrated system for seamless care coordination and patient access.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">🧪</div>
            <h3>On-Site Lab</h3>
            <p>Rapid testing capabilities with results often available during your visit.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">❤️</div>
            <h3>Cardiac Monitoring</h3>
            <p>Advanced EKG and cardiac assessment tools for comprehensive heart health evaluation.</p>
          </div>
        </div>
      </section>
    );
  }