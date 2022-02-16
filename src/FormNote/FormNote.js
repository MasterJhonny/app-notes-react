import React from "react";
import "./FormNote.css";

function FormNote({ newNote, setNewNote }) {

  // function para poner el cursor en focus
  const onSubmitAction = (e) => {
    e.preventDefault();
    let text = document.getElementById('des');
    text.focus();
  };

  // function for auto size from texarea
  const autoSize = (e) => {
    const textArea = e.target;
    setTimeout(() => {
      textArea.style.cssText = 'height:auto; padding:0';
      textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
    }, 0)
  }

  // function para detectar los cambios en las entradas del formulario
  const onChangeWrite = (e) => {
    const name = e.target.name;
    const value = e.target;

    // validation target
    if (name === "title") {
      setNewNote({
        title: value.value,
        description: newNote.description,
      });
    } 
    if(name === "description") {
      setNewNote({
        title: newNote.title,
        description: value.value,
      });
    }
  };

  return (
    <form className="taskform" onSubmit={onSubmitAction}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={onChangeWrite}
        autoFocus
      />
      <br/>
      <textarea 
        id="des" 
        name="description" 
        placeholder="Type something..."
        onChange={onChangeWrite} 
        onKeyDown={autoSize}
      ></textarea>
    </form>
  );
}

export { FormNote };
