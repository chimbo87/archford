import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile menu when navigation occurs
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className={`portfolio-navbar ${scrolled ? 'portfolio-navbar-scrolled' : ''}`}>
      <div className="portfolio-navbar-container">
        <div className="portfolio-navbar-logo">
          <button onClick={() => handleNavigate('/')} className="portfolio-logo-button">DevPortfolio</button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="portfolio-navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`portfolio-navbar-icon ${isOpen ? 'open' : ''}`}></span>
        </button>
        
        {/* Navigation Links */}
        <div className={`portfolio-navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => handleNavigate('/')} className="portfolio-nav-link">Home</button></li>
            <li><button onClick={() => handleNavigate('/about')} className="portfolio-nav-link">About</button></li>
            <li><button onClick={() => handleNavigate('/projects')} className="portfolio-nav-link">Projects</button></li>
            <li><button onClick={() => handleNavigate('/blogs')} className="portfolio-nav-link">Blog</button></li>
          </ul>
          <div className="portfolio-navbar-cta">
            <button onClick={() => handleNavigate('/contact')} className="portfolio-navbar-button">Let's Connect</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;