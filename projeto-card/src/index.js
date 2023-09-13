import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "./index.css"

function Page(){
  return(
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )

}
ReactDOM.render(Page(), document.getElementById("root"))