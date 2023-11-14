import React from "react"

export default function Header (){
    return(
        <div className="header--container">
            <div className="header--icon--container">
                <img src="images/meme.png" alt="meme icon" className="header--icon"></img>
                <h1>Meme Generator</h1>
            </div>
            <h4 className="header--course">React Course - Project 3</h4>
        </div>
    )
}