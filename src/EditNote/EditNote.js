import React from "react";

// import components
import { HeaderNote } from "../HeaderNote/HeaderNote";
import { FormNoteEdit } from "../FormNoteEdit/FormNoteEdit";
import { BtnHeader } from "../BtnHeader/BtnHeader";

function EditNote({ viewNote, setViewNote, updateNote }) {
  return (
    <React.Fragment>
      <HeaderNote>
        <BtnHeader to="/" icon="btn--icon" updateNote={updateNote} left="left"/>
      </HeaderNote>
        <FormNoteEdit
          viewNote={viewNote} 
          setViewNote={setViewNote}
        />
    </React.Fragment>
  );
}

export { EditNote };
