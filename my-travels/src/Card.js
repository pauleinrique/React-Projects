import React from "react"

export default function Card(props){
    return(
        <div className="card--container">
        
        <div className="card--img--container">
            <img src={props.item.imgSrc} className="card--img"></img>
        </div>
        
        <div className="card--content">
            <div className="card--top">
                <img src="images/icon-location.png" alt="Icone world" className="header--icon"></img>
                <p className="card--location">{props.item.country}</p>
                <a href={props.item.maps} className="card--maps">View on Google Maps</a>
            </div>
            <h3 className="card--location">{props.item.location}</h3>
            <p className="card--date">{props.item.date}</p>
            <p className="card--description">{props.item.description}</p>
        </div>

        </div>
    )
}