import React from "react"

export default function Header(){
    return(
        <header className="header--container">
            <div className="header--items">
                <img src="images/icon-global.png" alt="Icone world" className="header--icon"></img>
                <h3 className="header--title">my travel journal.</h3>
            </div>
        </header>
    )
}