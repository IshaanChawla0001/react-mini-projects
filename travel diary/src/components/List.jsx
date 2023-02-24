import React from "react";
import "../styles/list.css";

function List(props) {
  console.log(props);
  const {
    title,
    location,
    googleMapsUrl: maps,
    startDate,
    endDate,
    description,
    imageUrl: image,
  } = props;
  return (
    <div className="container">
      <div className="img-container">
        <img src={image} className="img" />
      </div>
      <div>
        <p>{location}</p>
        <p>{title}</p>
        <p>{maps}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default List;
