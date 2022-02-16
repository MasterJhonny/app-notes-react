import React from "react";

import './NoteItem.css';

function NoteItem ({ id, title, renderNote }) {

    function onClickNote () {
        renderNote(id);
    }

    return (
        <li className="note">
            <p className="NoteItem" onClick={onClickNote}>{title}</p>
        </li>
    )
}

export { NoteItem };
