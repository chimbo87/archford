import './ParkingTransport.css'

export function ParkingTransport() {
    return (
      <section className="parking-section">
        <h2>Parking & Transportation</h2>
        
        <div className="parking-options">
          <div className="option">
            <div className="option-icon">🚗</div>
            <h3>On-Site Parking</h3>
            <ul>
              <li>Free patient parking available</li>
              <li>20 designated spaces near entrance</li>
              <li>6 accessible parking spots</li>
            </ul>
          </div>
          
          <div className="option">
            <div className="option-icon">🚌</div>
            <h3>Public Transportation</h3>
            <ul>
              <li>Bus routes 42 and 105 stop nearby</li>
              <li>10-minute walk from Metro Station</li>
              <li>Bike racks available</li>
            </ul>
          </div>
          
          <div className="option">
            <div className="option-icon">🛎️</div>
            <h3>Valet Service</h3>
            <ul>
              <li>Available for patients with mobility challenges</li>
              <li>Free for first 2 hours</li>
              <li>Request at main entrance</li>
            </ul>
          </div>
        </div>
        
        <div className="parking-tip">
          <p><strong>Tip:</strong> Arrive 15 minutes early for parking during peak hours (9am-11am).</p>
        </div>
      </section>
    );
  }