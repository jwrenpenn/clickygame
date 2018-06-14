import React from "react";
import "./Header.css";


const Header = props => (
<div classame="card">
  <div className="card-body">
  <h1 className="title">{props.children}</h1>   
    <p className="words">Click vintage birbs. Do not click the same birb twice.</p>
    <p className="message-text">{props.message}</p>
    <div className="row">
        <div className="correct">
            <p className="score">Score: {props.score}</p>
        </div>
        <div className="high">
            <p className="high-score">Top Score: {props.topScore}</p>
        </div>
    </div>    
  </div>
</div>
);

export default Header;