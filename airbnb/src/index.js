import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"

export default function Page(){
    return(
        <div>
            <App />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))