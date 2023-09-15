import React from "react"

export default function Card(){
    return(
        <div className="card--container">
            <img src="image 12.png" alt="card" className="card--photo"></img>
            <div className="card--stats">
                <img src="Star 1-1.png" alt="star" className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p> <span className="bold">From $136</span> / person</p>
        </div>
    )
}