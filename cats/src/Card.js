import React from "react"
import './index.css';

export default function Card(){
    return(
        <div className="contact-card">
            <img src="gato1.jpg" alt="gato1" className="card--photo"></img>
            <h3>Mr. Whiskerson</h3>
            
            <div className="info-group">
                <img src="phone.png" alt="phone" className="card--logo"></img>
                <p className="card--text">(212) 555-1234</p>
            </div>

            <div className="info-group">
                <img src="mail.png" alt="mail" className="card--logo"></img>
                <p className="card--text">mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}