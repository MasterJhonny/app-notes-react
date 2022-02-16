import React from "react";
import { Link } from "react-router-dom";

function BtnHeader ({to, icon, left, addNote, deleteNote, updateNote }) {

  // function add new Note run
  const btnSaveNote = () => {

    // validation function exists
    if(addNote){
      addNote();
    }
    if(deleteNote) {
      deleteNote();
    }
    if(updateNote) {
      updateNote();
    }
  };


    return (
        <Link to={to} className={`header__btn ${icon} ${left}`} onClick={btnSaveNote}></Link>
    );
}

export { BtnHeader };