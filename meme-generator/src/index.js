import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import App from "./App.js"

function Page (){
  return(
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))