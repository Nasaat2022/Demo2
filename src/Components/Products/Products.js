import React, { useEffect } from "react";
import "./Products.css";
import image1 from "../../Assets/Images/red.png";
import image2 from "../../Assets/Images/Blue.png";
import image3 from "../../Assets/Images/white.png";
import image4 from "../../Assets/Images/Yellow.png";
import VanillaTilt from "vanilla-tilt";

const Products = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".Box"));
  }, []);
  return (
    <>
      <div className="container">
        <div className="Box">
          <h2 className="name">Product1</h2>
          <a href="./" className="buy">
            Click me
          </a>
          <div className="circle"></div>
          <img src={image1} alt="Img" className="product" />
        </div>
        <div className="Box">
          <h2 className="name">Product1</h2>
          <a href="./" className="buy">
            Click me
          </a>
          <div className="circle"></div>
          <img src={image2} alt="Img" className="product" />
        </div>
        <div className="Box">
          <h2 className="name">Product1</h2>
          <a href="./" className="buy">
            Click me
          </a>
          <div className="circle"></div>
          <img src={image3} alt="Img" className="product" />
        </div>
        <div className="Box">
          <h2 className="name">Product1</h2>
          <a href="./" className="buy">
            Click me
          </a>
          <div className="circle"></div>
          <img src={image4} alt="Img" className="product" />
        </div>
      </div>
    </>
  );
};

export default Products;
