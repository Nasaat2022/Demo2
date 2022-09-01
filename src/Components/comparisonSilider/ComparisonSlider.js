import React from "react";
import "./comparisonSlider.css";
import ImageSlider from "react-image-comparison-slider";
import Sx500 from "../../Assets/Images/Blue.png";
import Sx600 from "../../Assets/Images/Yellow.png";

const ComparisonSlider = () => {
  return (
    <>
      <div className="comparison_wrapper">
        <div className="main_comparison">
          <ImageSlider
            image1={Sx600}
            image2={Sx500}
            className="imageSlider"
            handleColor="#0d0d0d"
            handleBackgroundColor="#ffff"
            sliderColor="gray"
            sliderWidth={2}
          />
        </div>
      </div>
    </>
  );
};

export default ComparisonSlider;
