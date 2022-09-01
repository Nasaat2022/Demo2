import React from "react";
import Vehicle_background from "../../Assets/Images/500R teaser shot for Website.png";
import "./VehicleSection.css";

const VehicleSection = () => {
  return (
    <>
      <div className="main_Section_vehicle">
        <div className="background_vehicle">
          <img src={Vehicle_background} alt="img" />
        </div>
        <div className="Container_data_Vehicle">
          <h3>Our Vehicles</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <a href="./">CTA</a>
        </div>
      </div>
    </>
  );
};

export default VehicleSection;
