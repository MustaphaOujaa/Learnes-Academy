import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-main">
        
      
        <div className="logo-section">
          <span className="logo-icon">🔸</span>
          <span className="logo-text">Little Learners</span>
        </div>

   
        <div className="nav-spacer"></div>

        <ul className="nav-menu">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Student Life</a></li>
        </ul>
        
        <div className="nav-contact">
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;