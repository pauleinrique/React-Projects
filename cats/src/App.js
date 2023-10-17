import React from "react"
import Card from "./Card"
import './index.css';

export default function App(){
  return(
    <div className="app-container">
      <div>
        <Card />
        <Card />
      </div>
      <div>
        <Card />
        <Card />
      </div>
      
    </div>
  )
}