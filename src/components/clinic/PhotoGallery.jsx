import './PhotoGallery.css';
import banner from "../../assets/images/med02.png";
import banner01 from "../../assets/images/med20.png";
import banner02 from "../../assets/images/med22.jpg";
import banner03 from "../../assets/images/med06.png";
import banner04 from "../../assets/images/med07.png";
import banner05 from "../../assets/images/med08.png";
import banner06 from "../../assets/images/med09.png";
import banner07 from "../../assets/images/med10.png";
import banner08 from "../../assets/images/med12.png";
import banner09 from "../../assets/images/med13.png";
import banner10 from "../../assets/images/med14.png";
import banner12 from "../../assets/images/med15.png";
import banner13 from "../../assets/images/med16.png";
import banner14 from "../../assets/images/med17.png";

export function PhotoGallery() {
  const galleryPhotos = [
    {
      url:  banner,
      alt: 'Reception Area',
      area: 'Reception',
      description: '',
    },
    {
      url:  banner02,
      alt: 'Examination Room',
      area: 'Exam Room',
      description: '',
    },
    {
      url:  banner03,
      alt: 'Waiting Area',
      area: 'Waiting Area',
      description: '',
    },
    {
        url:  banner04,
        alt: 'Waiting Area',
        area: 'Waiting Area',
        description: '',
      },
      {
        url:  banner01,
        alt: 'Waiting Area',
        area: 'Waiting Area',
        description: '',
      },
      {
        url:  banner05,
        alt: 'Waiting Area',
        area: 'Waiting Area',
        description: '',
      },
      {
        url:  banner06,
        alt: 'Waiting Area',
        area: 'Waiting Area',
        description: '',
      },
      {
        url:  banner07,
        alt: 'Reception Area',
        area: 'Reception',
        description: '',
      },
      {
        url:  banner08,
        alt: 'Examination Room',
        area: 'Exam Room',
        description: '',
      },
      {
        url:  banner09,
        alt: 'Waiting Area',
        area: 'Waiting Area',
        description: '',
      },
      {
          url:  banner10,
          alt: 'Waiting Area',
          area: 'Waiting Area',
          description: '',
        },
        {
          url:  banner12,
          alt: 'Waiting Area',
          area: 'Waiting Area',
          description: '',
        },
        {
          url:  banner13,
          alt: 'Waiting Area',
          area: 'Waiting Area',
          description: '',
        },
        {
          url:  banner14,
          alt: 'Waiting Area',
          area: 'Waiting Area',
          description: '',
        },
  ];

  return (
    <section className="gallery-section">
      <h2>Clinic Photo Gallery</h2>
      {/* <p className="gallery-subtitle">
        Take a visual tour of our welcoming spaces and modern facilities
      </p> */}

      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.url} alt={photo.alt} />
            <div className="gallery-caption">
              <h3>{photo.area}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
