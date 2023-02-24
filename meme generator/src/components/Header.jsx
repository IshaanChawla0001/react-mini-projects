import React from "react";
import "../styles/header.css";
import logo from "../assets/troll.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
