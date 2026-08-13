import React from 'react';
import './AboutUs.css';
import aboutUs1 from '../images/about-us-photo-1.jpeg';
import aboutUs2 from '../images/about-us-photo-2.jpeg';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <div className="about-us-titles">
          <h2>About Us</h2>
          <h3>Adithya Beach Villa</h3>
        </div>
        <div className="about-us-text">
          <p>A serene getaway where luxury meets the tranquility of the sea. Nestled along the pristine coastline, our villa offers breathtaking ocean views, elegant accommodations, and world-class hospitality. Whether you're looking for a relaxing retreat or an adventurous escape, Aditya Beach Villa provides the perfect blend of comfort and nature. Come experience the beauty of the beach like never before!</p>
        </div>
      </div>
      <div className="about-us-photos">
        <img src={aboutUs1} alt="Adithya Beach Villa About Us Photo 1" />
        <img src={aboutUs2} alt="Adithya Beach Villa About Us Photo 2" />
      </div>
    </section>
  )
}

export default AboutUs;
