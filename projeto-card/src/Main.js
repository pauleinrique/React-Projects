import React from "react"
import Button from "./Button"

export default function Main(){
    return(
        <main className="main--container">
            <h1 className="main--name">Paulo Henrique</h1>
            <h2 className="main--jobrole">Frontend Developer</h2>
            <a href="index.html" className="main--website">paulohenrique.website</a>
            <div className="container--buttons">
            <Button imgSrc="mail.png" alt="Teste" color="white" width="20px">Email</Button>
            <Button imgSrc="linkedin.png" alt="Linkedin" color="blue" width="20px">Linkedin</Button>
            </div>
            
            <div>
                <h2 className="main--title">About</h2>
                <p className="main--text">Mount Fuji is the talest mountain in Japan, standing at 3.776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for
                both japanese and foreign tourists.   </p>
            </div>

            <div>
                <h2 className="main--title">Interests</h2>
                <p className="main--text">Mount Fuji is the talest mountain in Japan, standing at 3.776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for
                both japanese and foreign tourists.   </p>
            </div>
        </main>
    )
}