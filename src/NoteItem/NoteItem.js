import React from "react";

import './NoteItem.css';

function NoteItem (props) {
    return (
        <li className="note">
            <p className="NoteItem">{props.title}</p>
        </li>
    )
}

export { NoteItem };
