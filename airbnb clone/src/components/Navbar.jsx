import React from "react";
import "../styles/navbar.css";
import airbnb from "../assets/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={airbnb} />
    </nav>
  );
}

export default Navbar;
