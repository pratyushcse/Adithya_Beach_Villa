import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import logo from '../images/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.6452812528437!2d74.79162217507682!3d12.994524987322963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQwLjMiTiA3NMKwNDcnMzkuMSJF!5e0!3m2!1sen!2sin!4v1742360178616!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
      <div className="footer-section footer-center">
        <img className="logo-image" src={logo} alt="Company Logo" />
        <p>Where Luxury Meets the Ocean Breeze</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1AGHmJe4NE/?mibextid=wwXIfr" className="social-icon">
            <RiFacebookFill />
          </a>
          <a href="https://www.instagram.com/adithya_beach_villa_suratkal?igsh=MTZhaGR3bHpjeHN5OQ==" className="social-icon">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section footer-right">
        <h4 className="contact-title">CONTACT US</h4>
        <p>
          <BsTelephone className="contact-icon" />
          (+91) 9343353395, (+91) 9035916899
        </p>
        <p>
          <MdOutlineMail className="contact-icon" />
          siri.salian@gmail.com
        </p>
        <p>
          <CiLocationOn className="contact-icon" />
          Adithya Beach Villa, Sadashivanagar 2nd Cross, Surathkal, Mangaluru, Karnataka, India
        </p>
      </div>

      <div className="footer-section footer-right">
        <h4 className="contact-title">Terms & Conditions</h4>
        <p>• If occupancy exceeds 6 guests, an additional charge of ₹600 per extra person will apply.</p>
        <p></p>
       <p>• Guest house premises can be used for birthday parties and similar events with a maximum capacity of 20 persons. Booking of two villas is mandatory for such events.</p>
      </div>
    </footer>
  );
}

export default Footer;
