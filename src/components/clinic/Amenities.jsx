import './Amenities.css'
export function Amenities() {
    return (
      <section className="amenities-section">
        <h2>Patient & Visitor Amenities</h2>
        <p className="amenities-subtitle">We provide these comforts to make your visit more pleasant</p>
        
        <div className="amenities-grid">
          <div className="amenity">
            <div className="amenity-icon">☕</div>
            <h3>Refreshment Area</h3>
            <p>Complimentary coffee, tea, and water available in our waiting area.</p>
          </div>
          
          <div className="amenity">
            <div className="amenity-icon">📶</div>
            <h3>Free WiFi</h3>
            <p>High-speed internet access throughout the facility.</p>
          </div>
          
          <div className="amenity">
            <div className="amenity-icon">🧸</div>
            <h3>Children's Play Area</h3>
            <p>Safe, clean space with toys and books for young visitors.</p>
          </div>
          
          <div className="amenity">
            <div className="amenity-icon">📱</div>
            <h3>Device Charging</h3>
            <p>Charging stations for phones and tablets.</p>
          </div>
          
          <div className="amenity">
            <div className="amenity-icon">🛋️</div>
            <h3>Comfortable Seating</h3>
            <p>Ergonomic chairs and ample space in waiting areas.</p>
          </div>
          
          <div className="amenity">
            <div className="amenity-icon">🌿</div>
            <h3>Healing Garden</h3>
            <p>Outdoor space for relaxation before or after appointments.</p>
          </div>
        </div>
      </section>
    );
  }