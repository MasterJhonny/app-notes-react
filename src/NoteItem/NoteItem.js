import React from "react";

import './NoteItem.css';

function NoteItem ({ id, title, renderNote, color }) {

    function onClickNote () {
        renderNote(id);
    }

    const backColor = {
        backgroundColor: '#'+color
    };

    return (
        <li className="note">
            <p 
                className="NoteItem"
                style={backColor} 
                onClick={onClickNote}
            >{title}</p>
        </li>
    )
}

export { NoteItem };
