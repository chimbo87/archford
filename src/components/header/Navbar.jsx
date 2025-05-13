import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import logo from "../../assets/images/mitralog.png";
import { Link, useLocation } from "react-router-dom"; // Added useLocation hook

function Navbar() {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animatedLinks, setAnimatedLinks] = useState(false);
  const location = useLocation(); // Get current location

  const navigationItems = [
    { path: "/", name: "home" },
    { path: "/services", name: "services" },
    { path: "/about", name: "about" },

    { path: "/contact", name: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setAnimatedLinks(!animatedLinks);
  };

  useEffect(() => {
    if (!isMenuActive) {
      setAnimatedLinks(false);
    }
  }, [isMenuActive]);

  return (
    <div id="navigation-bar">
      <div id="nav-top">
        <div id="nav-top-card">
          <small>
            <MdEmail /> info@mitralclinic.org
          </small>
        </div>
        <div id="nav-top-card">
          <small id="top-nav-add">
            <IoLocation />
            1741 Lobengula Street, Ruwa
          </small>
        </div>
        <div id="nav-top-card">
          <small id="top-nav-addt">
            <FaSquarePhone /> +26377 484 3841
          </small>
        </div>
    
      </div>
      <nav className="navbar">
        <div
          className="mitral-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" />
          <small>MITRAL <span>CLINIC</span></small>
        </div>

        <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
          {navigationItems.map((item, index) => (
            <li
              key={item.name}
              style={
                animatedLinks
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        index / 7 + 0.3
                      }s`,
                    }
                  : {}
              }
            >
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                onClick={() => {
                  setIsMenuActive(false);
                  setAnimatedLinks(false);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="chat-btn"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Appointment
        </button>

        <button
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
