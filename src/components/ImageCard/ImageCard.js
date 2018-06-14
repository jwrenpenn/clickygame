import React from "react";
import "./ImageCard.css";

const imageCard = props => (
    <div onCLick={() => props.clickCard(props)} className="card col-sm-2 p-2 m-4">
      <img alt={props.name} src={props.image} />
      </div>
);

export default imageCard;
