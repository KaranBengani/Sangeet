import React from "react";
import './style.css';

function Header(){
    return(
        <div className="header">
         <h1 className="brand">Sangeet</h1>
         <input type="text" id="myInput" placeholder="Search for songs......" title="Type in a name"  className="search"></input>
         <div className="sign">
         <button className="signin btnanimation">Sign-In</button>
         <button className="signup btnanimation">Sign-Up</button>
         </div>
        </div>
    );
}

export default Header;