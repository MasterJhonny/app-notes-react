import React from 'react';
import { Link } from "react-router-dom";
import './CreateButton.css';

function CreateButton () {
    const onClickButton = (msg)=> {
        alert(msg);
    }
    return (
        <div className="container__btn">
            <Link to="/add" onClick={() => onClickButton("Ahora si! crear una nueva nota!")} className="btn">+</Link>
        </div>
    );
}

export { CreateButton };