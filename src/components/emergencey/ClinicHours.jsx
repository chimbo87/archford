import './ClinicHours.css';

const ClinicHours = () => {
  const hours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM', isDepartment: false },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM', isDepartment: false },
    { day: 'Wednesday', hours: '8:00 AM - 5:00 PM', isDepartment: false },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM', isDepartment: false },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM', isDepartment: false },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM', isDepartment: false },
    { day: 'Sunday & Public Holidays', hours: 'Closed', isDepartment: false, closed: true },
    { day: 'Lab Services', hours: '8:00 AM - 5:00 PM (Mon-Fri)', isDepartment: true },
    { day: 'Pediatrics', hours: '9:00 AM - 5:00 PM (Mon-Fri)', isDepartment: true },
    { day: 'Urgent Care', hours: '7:00 AM - 5:00 PM (Mon-Fri)', isDepartment: true },
    { day: 'Radiology Department', hours: '8:00 AM - 5:00 PM (Mon -Fri) 8:00 AM - 2:00PM (Saturday)', isDepartment: true }
  ];

  return (
    <section className="clinic-hours">
      <div className="hours-container">
        <div className="hours-header">
          <div className="hours-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h2>Clinic Hours</h2>
        </div>
        
        <div className="hours-grid">
          <div className="general-hours">
            <h3>General Office Hours</h3>
            <div className="hours-list">
              {hours.filter(item => !item.isDepartment).map((item, index) => (
                <div key={index} className={`hours-item ${item.closed ? 'closed' : ''}`}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="department-hours">
            <h3>Department Hours</h3>
            <div className="hours-list departments">
              {hours.filter(item => item.isDepartment).map((item, index) => (
                <div key={index} className="hours-item department">
                  <span className="day">{item.day}</span>
                  <span className="time">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="hours-notes">
          <div className="note-item">
            <div className="note-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <p>Hours may vary on holidays. Please call to confirm.</p>
          </div>
          
          <div className="note-item">
            <div className="note-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <p>Appointments are recommended. Walk-ins are welcome but may experience longer wait times.</p>
          </div>
        </div>
        
        <div className="hours-cta">
          <a href="#" className="hours-btn">Schedule an Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default ClinicHours;