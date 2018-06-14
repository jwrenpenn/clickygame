import React from "react";
import "./Header.css";


const Header = props => (
<div classame="card">
  <div className="card-body">
  <h1 className="title">{props.children}</h1>   
    <p className="words">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row">
        <div className="correct">
            <p className="display-correct">8</p>
        </div>
        <div className="high">
            <p className="high-score">8</p>
        </div>
    </div>    
  </div>
</div>
);

export default Header;