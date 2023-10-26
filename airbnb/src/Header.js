import React from "react"
import Card from "./Card"
import Data from "./data"


export default function Header(){
    const dataElements = Data.map(item => {
        return (
            <Card 
            key = {item.id}
            item={item}

            />
        )
    })

    return(
        <header>
            <div className="header--top">
                <img src="airbnb 1.png" alt="logo airbnb" className="header--icon"></img>
            </div>
            <div className="header--main">
                <img src="Group 77.png" alt="imagens" className="header--images"></img>
                <h1 className="header--title">Online experiences</h1>
                <p className="header--text">Join unique interactive activities 
                led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
            <section className="cards--list">
                {dataElements}
            </section>
                
            
           
          
                
        </header>
    )
}