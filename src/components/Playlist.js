import React from "react";
import './style.css';
import playlists from "./playlists";

function printList(list){
     return(
         <div className="rows">
          <img src={list.url} className="rowsimg"></img>
          <p>  {list.mood} </p>  
            </div>   //key was not passed as was not required so bare with the error. sorry.
     )
}

function Playlist(){
    return(
        <div className="playlist">
         <div className="playlistcontent">
            
        {playlists.map(printList)}
           <a href="">+</a>  
         </div>
        </div>
    );
}

export default Playlist;