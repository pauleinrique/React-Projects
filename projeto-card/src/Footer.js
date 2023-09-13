import React from "react"
import Button from "./Button"

export default function Footer(){
    return(
        <div className="footer--container">
            <Button imgSrc="twitter.png" alt="Twitter" color="gray" width="20px"></Button>
            <Button imgSrc="facebook.png" alt="Facebook" color="gray" width="20px"></Button>
            <Button imgSrc="instagram.png" alt="Instagram" color="gray" width="20px"></Button>
            <Button imgSrc="github.png" alt="GitHub" color="gray" width="20px"></Button>
        </div>
    )
}