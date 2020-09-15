import React from "react";
import './style.css';

function Card(props){
    return(
        <div className="card">
            <img src={props.src} className="cardimg"></img>
            <div className="cardtext">
            <p>{props.name}</p>
            </div>         
        </div>
    );
}

export default Card;