import React from "react";


function FormNoteEdit ({ viewNote, setViewNote }) {

  const filas = viewNote.description.split("\n").length;
  
  // function para poner el cursor en focus
  const onSubmitAction = (e) => {
    e.preventDefault();
    let text = document.getElementById('des');
    text.focus();
  };

  // function para detectar los cambios en las entradas del formulario
  const onChangeWrite = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setViewNote({
      ...viewNote,
      [name]: value
    })
  };

  return (
    <form className="taskform" onSubmit={onSubmitAction}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={viewNote.title}
        onChange={onChangeWrite}
        autoFocus
      />
      <textarea 
        id="des" 
        rows={filas}
        name="description" 
        placeholder="Type something..." 
        onChange={onChangeWrite}
        defaultValue={viewNote.description}
      ></textarea>
    </form>
  );
}

export { FormNoteEdit };