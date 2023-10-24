import React from "react"

export default function Card({img, rating, reviewCount, country, title, price}){
    return(
        <div className="card--container">
            <img src={img} alt="card" className="card--photo"></img>
            <div className="card--stats">
                <img src="Star 1-1.png" alt="star" className="card--star"></img>
                <span>{rating}</span>
                <span className="gray">{reviewCount} • </span>
                <span className="gray"> {country}</span>
            </div>
            <p className="card--title">{title}</p>
            <p> <span className="bold card--title">{price}</span> / person</p>
        </div>
    )
}