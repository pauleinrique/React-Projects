import React from "react"
import './index.css';

export default function Card(props){
    return(
        <div className="contact-card">
            <img src={props.img} alt="gato1" className="card--photo"></img>
            <h3>{props.name}</h3>
            
            <div className="info-group">
                <img src="phone.png" alt="phone" className="card--logo"></img>
                <p className="card--text">{props.phone}</p>
            </div>

            <div className="info-group">
                <img src="mail.png" alt="mail" className="card--logo"></img>
                <p className="card--text">{props.mail}</p>
            </div>
        </div>
    )
}