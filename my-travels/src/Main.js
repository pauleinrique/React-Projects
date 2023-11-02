import React from "react"
import Data from "./Data.js"
import Card from "./Card.js"

export default function Main(){


const dataElements = Data.map(item => {
    return (
        <Card 
        key = {item.id}
        item={item}

        />
    )
})
return(
    <section className="card--list">
        {dataElements}
    </section>
)
}