import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // دالة باش نسدو المينو فاش نكليكيو على شي رابط
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-main">
        <div className="logo-section">
          <span className="logo-icon"></span>
          <span className="logo-text">Little Learners</span>
        </div>

        <div className="nav-spacer"></div>

        {/* زدنا الكلاص "open" هنا باش نتحكمو فالمينو */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/Academics" onClick={toggleMenu}>Academics</Link></li>
          <li><Link to="/Admissions" onClick={toggleMenu}>Admissions</Link></li>
          <li><Link to="/Student_life" onClick={toggleMenu}>Student Life</Link></li>
          {/* زدنا رابط Contact داخل المينو فالموبايل فقط */}
          <li className="mobile-only"><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>

        <div className="nav-contact">
          <Link to="/Contact">Contact</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className="hamburger-icon">
             {/* تغيير شكل الأيقونة فاش تحل المينو (اختياري) */}
            <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;