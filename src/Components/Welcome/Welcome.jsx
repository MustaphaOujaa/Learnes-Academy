import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="hero-section">
      <div className="hero-card">
        {/* المربعات الملونة في الزاوية */}
        <div className="hero-pattern">
          <div className="pattern-column">
            <div className="square black"></div>
            <div className="square orange"></div>
            <div className="square black"></div>
            <div className="square orange"></div>
          </div>
          <div className="pattern-column">
            <div className="square orange"></div>
            <div className="square black"></div>
            <div className="square orange"></div>
            <div className="square black"></div>
          </div>
          <div className="pattern-column">
            <div className="square black"></div>
            <div className="square orange"></div>
            <div className="square black"></div>
          </div>
          <div className="pattern-column">
            <div className="square orange"></div>
            <div className="square black"></div>
          </div>
          <div className="pattern-column">
            <div className="square black"></div>
          </div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-left">
            <div className="badge-container">
              <span className="overview-badge">Overview</span>
            </div>
            <h1 className="hero-title">Welcome to Little Learners Academy</h1>
          </div>

          <div className="hero-right">
            <p className="hero-paragraph">
              A leading kinder garden school dedicated to providing a nurturing and stimulating 
              environment for young learners. With a commitment to excellence in early education, 
              we believe in shaping curious minds and building a strong foundation for a lifelong 
              love of learning. Our holistic approach fosters intellectual, social, emotional, 
              and physical development, ensuring that each child reaches their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;