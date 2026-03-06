import React from 'react';
import './Mission.css';

const Mission = () => {
 

  return (
    <div className="about-container">
    

      <section className="mission-section">
        <span className="badge" id='mission'>Mission & Visions</span>
        <h2 style={{ fontSize: '36px', marginBottom: '15px' }}>Our Mission & Visions</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#4C4C4C' }}>
          We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
        </p>

        <div className="mission-grid">
          {/* Mission */}
          <div className="custom-card mission-card">
            <div className="mission-header">
              <h2>Mission</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/1054/1054190.png" alt="mission" className="mission-icon" />
            </div>
            <p className="hero-text">
              At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.
            </p>
          </div>

          {/* Vision */}
          <div className="custom-card mission-card">
            <div className="mission-header">
              <h2>Vision</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2853/2853504.png" alt="vision" className="mission-icon" />
            </div>
            <p className="hero-text">
              Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;