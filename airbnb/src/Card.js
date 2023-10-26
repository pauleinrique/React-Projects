import React from "react"

export default function Card(props){
    
    return(
        <div className="card--container">
            {props.item.openSpots === 0 ?<div className="card--badge">SOLD OUT</div>: <div className="card--badge">AVAILABLE</div> }
            <img src={props.item.coverImg} alt="card" className="card--photo"></img>
            <div className="card--stats">
                <img src="Star 1-1.png" alt="star" className="card--star"></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">{props.item.stats.reviewCount} • </span>
                <span className="gray"> {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p> <span className="bold card--title">{props.item.price}</span> / person</p>
        </div>
    )
}