import React from "react";
import logo from "../../Assets/Images/logoAsset 8.svg";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="fullRight_Brand_name">
          <h1>JM</h1>
        </div>
        <div className="main_footer_left">
          <div className="footer_logo">
            <img src={logo} alt="logo1" />
          </div>

          <nav className="nav_items">
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./">Press</a>
              </li>
              <li>
                <a href="./">Contact</a>
              </li>
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Gallary</a>
              </li>
            </ul>
          </nav>
          <div className="footer_brand_para">
            <p>&copy;2022 Jindal Mobilitric Pvt. Ltd | All Rights Reserved</p>
          </div>
        </div>
        <div className="main_footer_right">
          <nav className="nav_items">
            <ul>
              <li>
                <a href="./">Our Story</a>
              </li>
              <li>
                <a href="./">Our Achievements</a>
              </li>
              <li>
                <a href="./">Our LeaderShip</a>
              </li>
              <li>
                <a href="./">Our Milestones</a>
              </li>
            </ul>
          </nav>
          <div className="nav_icons">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
