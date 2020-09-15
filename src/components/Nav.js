import React from "react";
import './style.css';
import playlists from "./playlists";

function printList(list){
    return(
        <div className="navrows">
         <p>  {list.mood} </p>  
           </div>   //key was not passed as was not required so bare with the error. sorry.
    )
}
function Nav(){
    return(
        <div className="nav">
          <div className="side1">
          <hr></hr>
          <br></br>
          <br></br>
              <h1>All Songs</h1>
              <h1>Moods</h1>
              {playlists.map(printList)}
              <h1>Queue</h1>
              <br></br>
          <br></br>
              <hr></hr>
          </div>
         <div className="side"></div>
        </div>
    );
}

export default Nav;