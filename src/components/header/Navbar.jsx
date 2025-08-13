import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={handleLinkClick}>
            <span className="logo-text" onClick={() => navigate("/")}>
              DevPortfolio
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="#home"
              className="navbar-link"
              onClick={() => navigate("/")}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#about"
              className="navbar-link"
              onClick={() => navigate("/about")}
            >
              About
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#projects"
              className="navbar-link"
              onClick={() => navigate("/projects")}
            >
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <a href="#contact" className="cta-button">
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-items">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                handleLinkClick(e); 
                navigate("/"); 
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about"  onClick={(e) => {
                handleLinkClick(e); 
                navigate("/about"); 
              }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
                handleLinkClick(e); 
                navigate("/projects"); 
              }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className="mobile-cta">
          <a href="#contact" className="cta-button" onClick={handleLinkClick}>
            Let's Talk
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
