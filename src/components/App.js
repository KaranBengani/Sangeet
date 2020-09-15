import React from "react";
import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Play from "./Play"

function App(){
    return(
        <div className="grid">
            <Header />
            <Nav />
            <Main />
            <Play />
        </div>
    );
}

export default App;