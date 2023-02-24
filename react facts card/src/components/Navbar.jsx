import React from "react";
import "./main.css";
import logo from "../assets/react.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="block-1">
        <img src={logo} className="logo" />
        <h3 className="h3">ReactFacts</h3>
      </div>
      <div className="block-2">
        <h4>React Course - Project 1</h4>
      </div>
    </div>
  );
}

export default Navbar;
