import React from "react";
import grid from "../assets/photo-grid.png";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero">
      <img className="grid" src={grid} />
      <div className="info">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
