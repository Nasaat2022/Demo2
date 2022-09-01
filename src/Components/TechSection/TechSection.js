import React from "react";
import "./TechSection.css";
import ChargingSation from "../../Assets/Images/Charging Station Perspective View.jpg";

const TechSection = () => {
  return (
    <>
      <div className="main_Tech_container">
        <div className="main_Tech_top">
          <h2>Our Tech</h2>
        </div>
        <div className="main_Tech_Middle">
          <div className="main_Tech_Middle_left">
            <div className="main_Tech_Middle_Left_1 Tech_item">
              <h3>Battery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                voluptas doloribus quis, ut esse blanditiis?
              </p>
            </div>
            <div className="main_Tech_Middle_Left_2 Tech_item">
              <h3>Battery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                voluptas doloribus quis, ut esse blanditiis?
              </p>
            </div>
            <div className="main_Tech_Middle_Left_3 Tech_item">
              <h3>Battery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                voluptas doloribus quis, ut esse blanditiis?
              </p>
            </div>
            <div className="main_Tech_Middle_Left_4 Tech_item">
              <h3>Battery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                voluptas doloribus quis, ut esse blanditiis?
              </p>
            </div>
          </div>
          <div className="main_Tech_Middle_Right">
            <img src={ChargingSation} alt="ChargingSation_Image" />
          </div>
        </div>
        <div className="main_Tech_bottom">
          <button>CTA</button>
        </div>
      </div>
    </>
  );
};

export default TechSection;
