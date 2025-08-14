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
  const handleLinkClick = (e, path) => {
    e.preventDefault(); // prevent anchor default navigation
    setIsMenuOpen(false); // close menu
    navigate(path); // navigate to the route
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="logo-text"
          >
            DevPortfolio
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="/"
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/about"
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, "/about")}
            >
              About
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/projects"
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, "/projects")}
            >
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/contact"
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, "/contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <a
            href="/contact"
            className="cta-button"
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
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
            <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>
              About
            </a>
          </li>
          <li>
            <a href="/projects" onClick={(e) => handleLinkClick(e, "/projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div className="mobile-cta">
          <a
            href="/contact"
            className="cta-button"
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
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
