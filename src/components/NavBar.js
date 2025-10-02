import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div 
            className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link 
              to="/" 
              className={`navbar-item ${isActive('/') ? 'is-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`navbar-item ${isActive('/about') ? 'is-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link 
              to="/path" 
              className={`navbar-item ${isActive('/path') ? 'is-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Path
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
