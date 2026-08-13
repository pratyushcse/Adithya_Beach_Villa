import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faBed, faWifi, faParking, faPaw, faCamera, faTv, faSnowflake, faBath } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="services-title">
          <h1>Our Services</h1>
          <h2>Discover What We Offer</h2>
        </div>
        <div className="services-cards">
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faConciergeBell} size="2x" />
            </i>
            <span>24-Hour Service</span>
            <p>
              Our dedicated team is available around the clock to ensure your stay is comfortable and all your needs are met.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faBed} size="2x" />
            </i>
            <span>Well-Furnished Rooms</span>
            <p>
              Experience comfort in our well-appointed rooms, featuring modern decor and high-quality furnishings.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faWifi} size="2x" />
            </i>
            <span>Complimentary Wi-Fi</span>
            <p>
              Stay connected with our high-speed internet access available throughout the villa premises.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faParking} size="2x" />
            </i>
            <span>Ample Parking</span>
            <p>
              We offer secure and convenient parking facilities for all our guests.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faPaw} size="2x" />
            </i>
            <span>Pet-Friendly Accommodation</span>
            <p>
              Your furry friends are welcome here; we provide pet-friendly amenities to ensure their comfort.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faCamera} size="2x" />
            </i>
            <span>Photography & Videography</span>
            <p>
              Capture your memorable moments with our professional photography and videography services.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faTv} size="2x" />
            </i>
            <span>In-Room Entertainment</span>
            <p>
              Each room is equipped with a flat-screen TV, offering a variety of channels for your entertainment.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faSnowflake} size="2x" />
            </i>
            <span>In-Room Refrigerator</span>
            <p>
              Keep your beverages and snacks cool with the in-room refrigerator provided for your convenience.
            </p>
          </div>
          <div className="card">
            <i>
              <FontAwesomeIcon icon={faBath} size="2x" />
            </i>
            <span>Two Bathrooms</span>
            <p>
              Enjoy the convenience of two fully equipped bathrooms in each accommodation unit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
