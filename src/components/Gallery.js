import React from 'react'
import House1 from '../images/House 1.jpeg'
import House2 from '../images/House 2.jpeg'
import House3 from '../images/House 3.jpeg'
import Hallway from '../images/Hallway.jpeg'
import Room1 from '../images/Room 1.jpeg'
import Room2 from '../images/Room 2.jpeg'
import "./Gallery.css"

function Gallery() {
  return (
    <>
      <div id='gallery' className="gallery">
        <h3 className="gallerytext">GALLERY</h3>
        <p className="gallery_outtext">Our Latest Photos</p>
        <section className="our_images">
          <div className="img_div">
            <img src={House1} alt="House1" />
          </div>

          <div className="img_div">
            <img src={House2} alt="House2" />
          </div>

          <div className="img_div">
            <img src={House3} alt="House3" />
          </div>

          <div className="img_div">
            <img src={Room1} alt="Room1" />
          </div>

          <div className="img_div">
            <img src={Hallway} alt="Hallway" />
          </div>

          <div className="img_div">
            <img src={Room2} alt="Room2" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery