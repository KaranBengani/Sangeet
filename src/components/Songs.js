import React from "react";
import './style.css';
import Card from "./Card";
import songlist from "./songlist";
function printCard(card){
   return(
       <Card 
          key={card.id}
          src={card.url}
          name={card.songname}
       />
   );
}
function Songs(){
    return(
        <div className="songcont">
        <div className="songs">
        {songlist.map(printCard)}    
        </div>
        </div>
    );
}

export default Songs;