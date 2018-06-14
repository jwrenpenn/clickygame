import React from "react";
import "./Header.css";


const Header = props => (
<div classame="card">
  <h1 className="title">Zoologique Clicky Memory Game</h1>   
    <h3 className="subtitle">Click vintage birbs. Do not click the same birb twice.</h3>
    <h4 className="message-text">{props.message}</h4>
        <div className="scores">
            <h4 className="score">Score: {props.score}</h4>
            <h4 className="high-score">Top Score: {props.topScore}</h4>
        </div>   
</div>
);

export default Header;