import React from "react"

export default function Meme(){
    return(
        <div className="meme--form">
            <form>
                <div className="meme--textboxes--container">
                <input type="text" alt="part 1 meme" placeholder="shut up..." className="meme--textboxes"></input>
                <input type="text" alt="part 1 meme" placeholder="and..." className="meme--textboxes"></input>
                </div>
                <div className="meme--button-container">
                <button type="submit" className="meme--button">Get a new meme image 👀</button>
                </div>
            </form>
        </div>
    )
}