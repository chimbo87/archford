import { useState } from 'react';
import './HealthTips.css';
import work03 from "../../assets/med12.jpeg";
import work04 from "../../assets/med01.jpeg";
import work05 from "../../assets/med11.jpeg";
import work06 from "../../assets/med08.jpeg";
import work07 from "../../assets/med10.jpeg";
import work08 from "../../assets/med09.jpeg";

const HealthTips = () => {
  const [activeTab, setActiveTab] = useState('news');
  
  const news = [
    {
      id: 1,
      title: "New Pediatric Wing Opening Next Month",
      date: "April 15, 2025",
      snippet: "We're excited to announce our new pediatric wing will be opening next month, featuring state-of-the-art equipment and child-friendly spaces.",
      image: work04, // Replace with actual image path
    },
    {
      id: 2,
      title: "Free Blood Pressure Screening Event",
      date: "May 5, 2025",
      snippet: "Join us for our community health day featuring free blood pressure screenings, nutrition consultations, and health education resources.",
      image: work03, // Replace with actual image path
    },
    {
      id: 3,
      title: "Dr. S Maforo Recognized for Excellence in Family Medicine",
      date: "April 2, 2025",
      snippet: "Congratulations to Dr. S Maforo for receiving the Regional Excellence Award in Family Medicine for her outstanding patient care.",
      image: work05, // Replace with actual image path
    }
  ];
  
  const tips = [
    {
      id: 1,
      title: "Seasonal Allergy Management",
      category: "Wellness",
      snippet: "Learn effective strategies to manage seasonal allergies, including identifying triggers, medication options, and home remedies.",
      image: work06, // Replace with actual image path
    },
    {
      id: 2,
      title: "Heart-Healthy Diet Recommendations",
      category: "Nutrition",
      snippet: "Discover the top foods that promote heart health and simple dietary changes that can have a significant impact on your cardiovascular wellness.",
      image: work07, // Replace with actual image path
    },
    {
      id: 3,
      title: "Importance of Regular Exercise",
      category: "Fitness",
      snippet: "Find out how incorporating just 30 minutes of moderate exercise into your daily routine can improve your overall health and well-being.",
      image: work03, // Replace with actual image path
    }
  ];

  return (
    <section className="health-tips-section">
      <div className="health-tips-container">
        <h2>Stay Informed</h2>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Clinic News
          </button>
          <button 
            className={`tab ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            Health Tips
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'news' && (
            <div className="news-grid">
              {news.map(item => (
                <div className="news-card" key={item.id}>
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.snippet}</p>
                    <a href="#" className="read-more">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'tips' && (
            <div className="tips-grid">
              {tips.map(item => (
                <div className="tip-card" key={item.id}>
                  <div className="tip-image">
                    <img src={item.image} alt={item.title} />
                    <span className="tip-category">{item.category}</span>
                  </div>
                  <div className="tip-content">
                    <h3>{item.title}</h3>
                    <p>{item.snippet}</p>
                    <a href="#" className="read-more">Read Full Article</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="view-all">
          <a href="/about" className="view-all-link">View All {activeTab === 'news' ? 'News' : 'Health Tips'}</a>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;