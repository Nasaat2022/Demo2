import React from "react";
import Hero_image from "../../Assets/Images/4W9A0729.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="main_container">
        <section className="Hero_section">
          <div className="left_hero_secction">
            <h1>
              INDIA'S <br />
              <span> ELECTRIC</span> <br />
              FUTURE
            </h1>
            <button>CTA</button>
          </div>
          <div className="Right_hero_secction">
            <div className="Right_hero_image">
              <img src={Hero_image} alt="Hero_image" />
            </div>
          </div>
        </section>
        <div className="fullRight_Brand_name">
          <h1>JM</h1>
        </div>
        <div className="applyForDealer">
          <button>Apply For DealerShip</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
