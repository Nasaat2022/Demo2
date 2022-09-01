import React from "react";
import "./Products2.css";
import Image1 from "../../Assets/Images/red.png";
import Image2 from "../../Assets/Images/white.png";
const Products2 = () => {
  return (
    <>
      <div className="Product_heading">
        <h2>Our Latest Releases ...</h2>
        <hr className="heading_hr" />
      </div>
      <section className="split_product">
        <div className="product">
          <img src={Image1} alt="1" />
          <div className="content">
            <h2>Sx 500R</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              aliquam architecto? Nesciunt explicabo excepturi provident debitis
              adipisci laborum blanditiis porro!
            </p>
          </div>
        </div>
        <div className="product">
          <img src={Image2} alt="1" />
          <div className="content">
            <h2>Sx 500F</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              aliquam architecto? Nesciunt explicabo excepturi provident debitis
              adipisci laborum blanditiis porro!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products2;
