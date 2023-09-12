import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import './Navbar'
import Navbar from "./Navbar"
import Main from "./Main"


function Page(){
    return(
    <div>
        <Navbar />
        <Main />
        
    </div>)
}
ReactDOM.render(<Page />, document.getElementById("root"))