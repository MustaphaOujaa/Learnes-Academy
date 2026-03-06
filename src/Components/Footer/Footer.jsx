import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom'; 

const Footer = () => {
  
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer-wrapper">
      <footer className="main-footer">
        <div className="footer-grid">
          
          {/* Brand & Contact */}
          <div className="brand-side">
            <div className="logo-area" onClick={handleScrollToTop} style={{cursor: 'pointer'}}>
              <div className="diamond-icon"></div>
              <span>Little Learners</span>
            </div>
            <p className="brand-text">
              We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>
            <div className="contact-list">
              {/* هاد الرابط كيفتح الـ Email نيشان */}
              <a href="mailto:hello@littlelearners.com" className="contact-btn">
                <div className="icon-sq">✉️</div>
                hello@littlelearners.com
              </a>
              
              {/* هاد الرابط كيصوني على النمرة نيشان ف الموبايل */}
              <a href="tel:+9191813232309" className="contact-btn">
                <div className="icon-sq">📞</div>
                +91 91813 23 2309
              </a>
              
              {/* رابط الموقع ف الخريطة */}
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-btn">
                <div className="icon-sq">📍</div>
                Somewhere in the World
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="nav-col">
            <h4>Home</h4>
            <ul>
              <li><a href="#features" onClick={() => console.log('Navigate to Features')}>Features</a></li>
              <li><a href="#testimonials">Our Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="/about#mission">Our Mission</a></li>
              <li><a href="/about#vision">Our Vision</a></li>
              <li><a href="/history">History</a></li>
              <li><a href="/teachers">Teachers</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4>Academics</h4>
            <ul>
              <li><a href="/academics/features">Special Features</a></li>
              <li><a href="/gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="/contact">Information</a></li>
              <li><a href="/map">Map & Direction</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-bar">
          <div className="legal-links">
            <a href="/terms">Terms of Service</a> 
            <span style={{margin: '0 5px', color: '#E4E4E7'}}>|</span> 
            <a href="/privacy">Privacy Policy</a> 
            <span style={{margin: '0 5px', color: '#E4E4E7'}}>|</span> 
            <a href="/cookies">Cookie Policy</a>
          </div>
          
          <div className="social-group">
            {/* روابط السوشل ميديا خدامة وتفتح ف صفحة جديدة */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" title="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" title="Twitter">t</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">in</a>
          </div>
        </div>

        <div className="copyright-tag">
          Copyright © {new Date().getFullYear()} Little Learners Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;