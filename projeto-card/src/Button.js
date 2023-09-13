import React from "react"

export default function Button({imgSrc,color,alt,width,children}){
    return(
        <button className={`button button-${color}`}><img src={imgSrc} alt={alt} width={width}></img>{children}</button>
    )
}