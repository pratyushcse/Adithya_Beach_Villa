import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,

} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-header">
      <section className="navbar">
        <div className="nav-logo">
          <a href="/index.html">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div
          id="mobile-container"
          className={`mobile-menu-container ${menuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-box">
            <i className="close-icon" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faXmark} className="icon-close" />
            </i>
            <div className="mobile-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#rooms">Rooms</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="mobile-social">
              <a
                href="https://www.facebook.com/share/1AGHmJe4NE/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="icon-social" />
              </a>
              <a
                href="https://www.instagram.com/adithya_beach_villa_suratkal?igsh=MTZhaGR3bHpjeHN5OQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon-social" />
              </a>
              
              
            </div>
            <div className="mobile-contact">
            <div className="mobile-tel">
  <a href="tel:+918105280757">
    <FontAwesomeIcon icon={faPhone} className="icon-contact" />
    +91 9343353395
  </a>
</div>
<div className="nav-email">
  <a href="mailto:siri.salian@gmail.com">
    <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
    siri.salian@gmail.com
  </a>
</div>

            </div>
          </div>
        </div>
        <div className="menu">
          <i className="navbar-menu-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} className="icon-menu" />
          </i>
        </div>
        <div className="nav-tel">
  <a href="tel:+919343353395">
    <FontAwesomeIcon icon={faPhone} className="icon-contact" />
    (+91) 9343353395
  </a>
</div>
<div className="nav-email">
  <a href="mailto: siri.salian@gmail.com">
    <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
    siri.salian@gmail.com
  </a>
</div>

        <div className="nav-right">
          <div className="social">
            <a
              href="https://www.facebook.com/share/1AGHmJe4NE/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="icon-social" />
            </a>
            <a
              href="https://www.instagram.com/adithya_beach_villa_suratkal?igsh=MTZhaGR3bHpjeHN5OQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon-social" />
            </a>
            
            
              
          </div>
          <div className="location">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
            </i>
            Sadashivanagar 2nd cross, Surathkal
          </div>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
