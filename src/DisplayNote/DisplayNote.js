import React from "react";

import './DisplayNote.css';


function DisplayNote ({ title, description }) {
    return (
        <div className="taskform">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    );
}

export { DisplayNote };