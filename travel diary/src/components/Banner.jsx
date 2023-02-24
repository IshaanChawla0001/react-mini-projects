import React from "react";
import "../styles/banner.css";
import logo from "../../public/assets/WorldWide.png";

function Banner() {
  return (
    <div className="banner">
      <img src={logo} />
      <p className="banner-tag">My travel journal!</p>
    </div>
  );
}

export default Banner;
