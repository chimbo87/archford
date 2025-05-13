import banner01 from "../../assets/med03.jpeg";
import banner02 from "../../assets/med04.jpeg";
import banner03 from "../../assets/med05.jpeg";
import banner04 from "../../assets/med06.jpeg";
import banner05 from "../../assets/med07.jpeg";
import banner06 from "../../assets/med08.jpeg";
import './VirtualTour.css'


export function VirtualTour() {
  const photos = [
    { url: banner01, alt: 'Lobby view', caption: 'Modern lobby area' },
    { url:banner02, alt: 'Lab room', caption: 'High-tech lab facilities' },
    { url: banner03, alt: 'Outdoor area', caption: 'Relaxing outdoor space' },
    { url: banner04, alt: 'Outdoor area', caption: 'Relaxing outdoor space' },
  ];

  return (
    <section className="virtual-tour">
      <h2>Gallery</h2>
      <p className="subtitle">
        Explore our state-of-the-art facility from the comfort of your home
      </p>

      <div className="tour-grid">
        {photos.map((photo, index) => (
          <div key={index} className="tour-item">
            <img src={photo.url} alt={photo.alt} />
            <p className="photo-caption">{photo.caption}</p>
          </div>
        ))}
      </div>

      <button className="cta-button">View Full Gallery</button>
    </section>
  );
}

  