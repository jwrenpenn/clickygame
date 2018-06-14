import React from "react";
import "./ImageCard.css";

const imageCard = props => (
  
  <div className="game">
    <div className="card">
      <div className="img-container">
      <button type="button" className="btn btn-outline-primary">
      <img alt={props.name} src={props.image} />
      </button>
      </div>
    </div>
  </div>
);

export default imageCard;
