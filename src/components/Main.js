import React from "react";
import Songs from "./Songs";
import Playlist from "./Playlist";
import Queue from "./Queue";
import './style.css';


function Main(){
    return(
        <div className="main">
         <Songs />
         <Playlist />
         <Queue />
        </div>
    );
}

export default Main;