import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-col about">
          <div className="footer-logo">
            <span className="orange-box"></span>
            <h3>Little Learners</h3>
          </div>
          <p>We believe in the power of early education to shape a brighter future for every child.</p>
          <div className="contact-info">
            <p>📧 hello@littlelearners.com</p>
            <p>📞 +1 (555) 000-0000</p>
            <p>📍 Everywhere, Any City</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Home</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Our Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

   
        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Awards and Recognitions</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Teachers</a></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h4>Sections</h4>
          <ul>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Student Life</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 Little Learners Academy. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;