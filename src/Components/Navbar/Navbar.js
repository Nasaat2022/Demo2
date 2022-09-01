import React from "react";
import navLogo from "../../Assets/Images/Asset 1 (1).svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="main_navbar">
        <nav>
          <div className="navlogo">
            <img src={navLogo} alt="" />
          </div>
          <div className="navbar_items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Gallary</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
