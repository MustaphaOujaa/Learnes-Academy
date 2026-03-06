import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section 1: Brand & Contact */}
        <div className="footer-brand">
          <div className="logo">
            <i className="fas fa-square-full"></i>
            <span>Little Learners</span>
          </div>
          <p className="description">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>hello@littlelearners.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+91 91813 23 2309</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>

        {/* Section 2: Links */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Home</h4>
            <ul>
              <li>
                <a href="/Benefits">Benefits</a>
              </li>
              <li>
                <a href="/testimonials">Our Testimonials</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="/mission">Our Mission & Vision</a>
              </li>
              <li>
                <a href="/Awards">Awards and Recognitions</a>
              </li>
              <li>
                <a href="/History">History</a>
              </li>
              <li>
                <a href="/Team">Teachers</a>
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Academics</h4>
            <ul>
              <li>
                <a href="/special-features">Special Features</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#info">Information</a>
              </li>
              <li>
                <a href="#map">Map & Direction</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#terms">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#cookie">Cookie Policy</a>
        </div>
        <div className="social-icons">
          <a href="#" className="social-box">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-box">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-box">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="copyright">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
