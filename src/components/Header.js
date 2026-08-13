import React from 'react';
import "./Header.css";
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import slider4 from '../images/slider4.jpg';

const Header = () => {
  return (
    <div>
      <section className="header-slider">
        <div className="header-container">
          <img src={slider1} className="header-slide slide1" alt="Slider 1" />
          <img src={slider2} className="header-slide slide2" alt="Slider 2" />
          <img src={slider3} className="header-slide slide3" alt="Slider 3" />
          <img src={slider4} className="header-slide slide4" alt="Slider 4" />
          <div className="header-shadow">
            <div className="header-details">
              <h1>Welcome to Adithya Beach Villa</h1>
              <p>A perfect blend of luxury and serenity by the sea. Enjoy stunning ocean views, elegant stays, and warm hospitality for a relaxing getaway.</p>
              <button onClick={() => {
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
        window.location.href = 'tel:+919343353395';
    } else {
        alert('Call us at +91 9343353395');
    }
}}>
    Contact Now
</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

