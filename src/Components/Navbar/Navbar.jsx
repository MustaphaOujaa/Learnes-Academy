import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"



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
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/admissions">Admissions</Link>
          </li>
          <li>
            <Link to="/student-life">Student Life</Link>
          </li>
        </ul>

        <div className="nav-contact">
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
