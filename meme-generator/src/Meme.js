import React from "react"
import memesData from "./memesData.js"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return(
        <div className="meme--form">
            <div className="form">
                <div className="meme--textboxes--container">
                <input type="text" alt="part 1 meme" placeholder="shut up..." className="meme--textboxes"></input>
                <input type="text" alt="part 1 meme" placeholder="and..." className="meme--textboxes"></input>
                </div>
                <div className="meme--button-container">
                <button type="submit" className="meme--button" onClick={getMemeImage}>Get a new meme image 👀</button>
                </div>
                <div className="meme--image--container">
                    <img src={memeImage} className="meme--image"></img>
                </div>
                
            </div>
        </div>
    )
}