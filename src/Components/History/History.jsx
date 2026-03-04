import React from 'react';
import './History.css';

const History = () => {
  const historyData = [
    { year: '2023', title: 'Resilience and Future Horizons', desc: 'Adapting to new challenges and expanding our digital learning tools to ensure uninterrupted education.' },
    { year: '2017', title: 'Innovation and Technology', desc: 'Introduced coding and advanced STEM programs for early learners, fostering a tech-savvy generation.' },
    { year: '2012', title: 'Expansion and Recognition', desc: 'Opened our second campus and received national excellence awards for our curriculum and student support.' },
    { year: '2005', title: 'Inception and Growth', desc: 'The academy was founded with a vision for holistic child development and a commitment to nurturing young minds.' }
  ];

  return (
    <section className="history-section">
      <span className="badge">Our History</span>
      <h2 style={{fontSize: '40px', margin: '10px 0'}}>Our Journey Through the Years</h2>
      
      <div className="history-container">
        {historyData.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* صندوق السنة */}
            <div className="year-box">
              <div className="mini-pattern">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`mini-dot ${i % 2 === 0 ? 'or' : 'bk'}`}></div>
                ))}
              </div>
              <span className="year-text">{item.year}</span>
            </div>

            {/* النص */}
            <div className="history-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;