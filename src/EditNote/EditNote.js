import React from "react";

// import components
import { HeaderNote } from "../HeaderNote/HeaderNote";
import { FormNote } from "../FormNote/FormNote";

function EditNote({ stateApp, setStateApp, setNewNote, addNote }) {
  return (
    <React.Fragment>
      <HeaderNote 
        stateApp={stateApp} 
        setStateApp={setStateApp}
        addNote={addNote}
      />
      <FormNote setNewNote={setNewNote} />
    </React.Fragment>
  );
}

export { EditNote };
