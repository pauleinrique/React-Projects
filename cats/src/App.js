import React from "react"
import Card from "./Card"
import './index.css';
import dataCats from "./dataCats"

export default function App(){
  const Gatos = dataCats.map(item => {
    return (
      <Card img={item.img} name={item.name} phone={item.phone} mail={item.mail}/>
    )
  })
  return(
    <div className="app-container">
      
      {Gatos}
      
    </div>
  )
}