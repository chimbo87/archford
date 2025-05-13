import React, { useState } from 'react';
import renovation from "../../assets/images/med01.png";
import equipment from "../../assets/images/med04.png";
import waitingroom from "../../assets/images/med08.png";
import staff from "../../assets/images/med09.png";
import doctor from "../../assets/images/med10.png";
import med from "../../assets/images/med12.png";
import treat from "../../assets/images/med13.png";
import rooms from "../../assets/images/med06.png";
import './FacilityPhotos.css';

const FacilityPhotos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  

  const photos = [
    {
      id: 1,
      src: renovation,
      alt: "",
      category: "facility"
    },
    {
      id: 2,
      src: equipment,
      alt: "",
      category: "facility"
    },
    {
      id: 3,
      src: waitingroom,
      alt: "",
      category: "facility"
    },
    {
      id: 4,
      src: staff,
      alt: "",
      category: "team"
    },
    {
      id: 5,
      src: doctor,
      alt: "",
      category: "team"
    },
    {
      id: 6,
      src: med,
      alt: "",
      category: "facility"
    },
    {
      id: 7,
      src: treat,
      alt: "",
      category: "team"
    },
    {
      id: 8,
      src: rooms,
      alt: "",
      category: "team"
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="facility-photos-container">
      <h2 className="photos-section-title">Gallery</h2>

      
      <div className="photos-grid">
        {filteredPhotos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.alt} className="photo-image" />
              <div className="photo-overlay">
                <p className="photo-caption">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityPhotos;