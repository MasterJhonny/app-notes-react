import React from "react";

// import components
import { HeaderNote } from "../HeaderNote/HeaderNote";
import { FormNote } from "../FormNote/FormNote";
import { BtnHeader } from '../BtnHeader/BtnHeader';

function AddNote({ newNote, setNewNote, addNote }) {

  return (
    <React.Fragment>
      <HeaderNote>
        <BtnHeader to="/" icon="btn--icon" addNote={addNote} left="left"/>
        {/* <BtnHeader to="/edit" icon="btn--icon-save" onClick={addNote} /> */}
      </HeaderNote>
      <FormNote
        newNote={newNote} 
        setNewNote={setNewNote}
      />
    </React.Fragment>
  );
}

export { AddNote };