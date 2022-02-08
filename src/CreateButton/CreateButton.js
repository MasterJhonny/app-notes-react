import React from 'react';
import './CreateButton.css';

function CreateButton ({ setStateApp }) {
    const onClickButton = (msg)=> {
        alert(msg);
        setStateApp('Edit');
    }
    return (
        <div className="container__btn">
            <button onClick={() => onClickButton("Ahora si! crear una nueva nota!")} className="btn">+</button>
        </div>
    );
}

export { CreateButton };