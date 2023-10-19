import React from "react"
import './index.css';

export default function Card({img, name, phone, mail}){
    return(
        <div className="contact-card">
            <img src={img} alt="gato1" className="card--photo"></img>
            <h3>{name}</h3>
            
            <div className="info-group">
                <img src="phone.png" alt="phone" className="card--logo"></img>
                <p className="card--text">{phone}</p>
            </div>

            <div className="info-group">
                <img src="mail.png" alt="mail" className="card--logo"></img>
                <p className="card--text">{mail}</p>
            </div>
        </div>
    )
}