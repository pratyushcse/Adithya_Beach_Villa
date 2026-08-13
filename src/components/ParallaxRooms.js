import React from "react";
import "./Rooms.css"

function ParallaxRooms() {
  return (
    <>
      <div className="background">
        <span className="a-place">
          A Place of <br />
          <span className="animated_text">
            <span>Waves</span>
            <span>Comfort</span>
            <span>Sunsets</span>
          </span>
        </span>
      </div>

      <div id="rooms" className="our_and_yourhome_text">
        <p className="our_acc">OUR ACCOMMODATION</p>
        <p className="rooms_text">Your Home Away From Home</p>
      </div>

      <section className="rooms">
        <div className="room1">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">1 BHK Room</h3>
              <h3 className="price">
              ₹3000 <span className="per_night">/Per day</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 2 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">King Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                  Wi-Fi, TV, Fridge, Fully Furnished With 1 Bathroom
                  </td>
                </tr>
              </tbody>
            </table>
            <a
  className="details"
  href="tel:+918105280757"
  onClick={(e) => {
    if (window.innerWidth > 768) { // Assuming desktop screens are wider than 768px
      e.preventDefault();
      alert("Call us at +91 8105280757");
    } else {
      window.location.href = "tel:+918105280757";
    }
  }}
>
  Contact Now
</a>

           
          </div>
        </div>
        <div className="room3">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">2 BHK Villa</h3>
              <h3 className="price">
              ₹5000<span className="per_night">/Per day</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 6 persons (An additional charge applies for an extra bed.)</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">1 King Size, 1 Queen Size</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                  Wi-Fi, TV, Fridge, Fully Furnished With 2 Bathrooms
                  </td>
                </tr>
              </tbody>
            </table>
            <a
  className="details"
  href="tel:+918105280757"
  onClick={(e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      alert("Call us at +91 8105280757");
    } else {
      window.location.href = "tel:+918105280757";
    }
  }}
>
  Contact Now
</a>


          </div>
        </div>
        <div className="room2">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">2 BHK Villa</h3>
              <h3 className="price">
              ₹5000<span className="per_night">/Per day</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 8 persons (An additional charge applies for an extra bed.)</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">2 King Size </td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                  Wi-Fi, TV, Fridge, Fully Furnished With 2 Bathrooms
                  </td>
                </tr>
              </tbody>
            </table>
            <a
  className="details"
  href="tel:+918105280757"
  onClick={(e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      alert("Call us at +91 8105280757");
    } else {
      window.location.href = "tel:+918105280757";
    }
  }}
>
  Contact Now
</a>


          </div>
        </div>
        
      </section>
    </>
  );
}

export default ParallaxRooms;
