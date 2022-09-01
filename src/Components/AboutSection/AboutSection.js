import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <>
      <div className="About_Main_container">
        <div className="About_Main_container_Data">
          <div className="About_left_Image">
            <img
              src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="About_hero_image"
            />
          </div>
          <div className="About_Right_Data">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
            <button>CTA</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
