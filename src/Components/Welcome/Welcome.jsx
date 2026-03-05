import React from 'react';
import './Welcome.css';

const Welcome = (props) => {
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
              <span className="overview-badge">{props.btn}</span>
            </div>
            <h1 className="hero-title">{props.welcome}</h1>
          </div>

          <div className="hero-right">
            <p className="hero-paragraph">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;