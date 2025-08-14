import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = useCallback((path) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Small delay to ensure smooth animation
    setTimeout(() => {
      navigate(path, { replace: false });
    }, 100);
  }, [navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Get active link class
  const isActiveLink = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo Section */}
          <div className="navbar__logo">
            <button 
              className="navbar__logo-btn"
              onClick={() => handleNavigation('/')}
              aria-label="Go to homepage"
            >
              DevPortfolio
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar__nav">
            <ul className="navbar__nav-list">
              <li className="navbar__nav-item">
                <button 
                  className={`navbar__nav-link ${isActiveLink('/') ? 'navbar__nav-link--active' : ''}`}
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </button>
              </li>
              <li className="navbar__nav-item">
                <button 
                  className={`navbar__nav-link ${isActiveLink('/about') ? 'navbar__nav-link--active' : ''}`}
                  onClick={() => handleNavigation('/about')}
                >
                  About
                </button>
              </li>
              <li className="navbar__nav-item">
                <button 
                  className={`navbar__nav-link ${isActiveLink('/projects') ? 'navbar__nav-link--active' : ''}`}
                  onClick={() => handleNavigation('/projects')}
                >
                  Projects
                </button>
              </li>
              <li className="navbar__nav-item">
                <button 
                  className={`navbar__nav-link ${isActiveLink('/contact') ? 'navbar__nav-link--active' : ''}`}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="navbar__cta">
            <button 
              className="navbar__cta-btn"
              onClick={() => handleNavigation('/contact')}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--active' : ''}`}>
          <ul className="navbar__mobile-list">
            <li className="navbar__mobile-item">
              <button 
                className={`navbar__mobile-link ${isActiveLink('/') ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </button>
            </li>
            <li className="navbar__mobile-item">
              <button 
                className={`navbar__mobile-link ${isActiveLink('/about') ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavigation('/about')}
              >
                About
              </button>
            </li>
            <li className="navbar__mobile-item">
              <button 
                className={`navbar__mobile-link ${isActiveLink('/projects') ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavigation('/projects')}
              >
                Projects
              </button>
            </li>
            <li className="navbar__mobile-item">
              <button 
                className={`navbar__mobile-link ${isActiveLink('/contact') ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="navbar__mobile-cta">
            <button 
              className="navbar__cta-btn navbar__cta-btn--mobile"
              onClick={() => handleNavigation('/contact')}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="navbar__overlay"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;