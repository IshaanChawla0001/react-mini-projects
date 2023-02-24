import React from "react";
import "../styles/card.css";
import star from "../assets/star.png";
// import image from "../assets/katie.png";

function Card(props) {
  const { id, title, desciption, price, coverImg, stats, location, openSpots } =
    props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="container">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../../public/assets/${coverImg}`} className="card--image" />
        <div className="card--stats">
          <img src={star} className="card--star" />
          <span>{stats.rating}</span>
          <span className="gray">({stats.reviewCount}) • </span>
          <span className="gray">{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
