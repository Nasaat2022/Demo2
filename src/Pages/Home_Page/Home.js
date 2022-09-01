import React from "react";
import AboutSection from "../../Components/AboutSection/AboutSection";
import ComparisonSlider from "../../Components/comparisonSilider/ComparisonSlider";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Products from "../../Components/Products/Products";
import Products2 from "../../Components/Products2/Products2";
import TechSection from "../../Components/TechSection/TechSection";
import VehicleSection from "../../Components/VehicleSection/VehicleSection";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
      <Products2 />
      <ComparisonSlider />
      <TechSection />
      <VehicleSection />
    </>
  );
};

export default Home;
