import React from "react"
import Card from "./Card"
import './index.css';

export default function App(){
  return(
    <div className="app-container">
      
        <Card img="gato1.jpg" name="Mr. Whiskerson" phone="(212) 555-1234" mail="mr.whiskaz@catnap.meow"/>
        <Card img="gato2.jpeg" name="Fluffykins" phone="(212) 555-2345" mail="fluff@me.com"/>
        <Card img="gato3.jpg" name="Felix" phone="(212) 777-4567" mail="thecat@hotmail.com"/>
        <Card img="gato4.jpeg" name="Pumpkin" phone="(0800) CAT KING" mail="pumpkin@scrimba.com"/>
      
      
    </div>
  )
}