import React from "react";
import "./FormNote.css";

function FormNote({ setNewNote }) {
  
  const [state, setState] = React.useState({
    title: "",
    description: "",
  });

  setNewNote(state);

  const onSubmitAction = (e) => {
    e.preventDefault();
    let text = document.getElementById('des');
    text.focus();
  };

  const onChangeWrite = (e) => {
    const name = e.target.name;
    const value = e.target;

    if (name === "title") {
      setState({
        title: value.value,
        description: state.description,
      });
      setNewNote(state);
    } else {
      setState({
        title: state.title,
        description: value.innerText,
      });
      setNewNote(state);
    }
  };

  return (
    <form className="taskform" onSubmit={onSubmitAction}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={state.title}
        onChange={onChangeWrite}
        autoFocus
      />
      <div 
        className="fake-textarea" 
        contentEditable={true}
        name="description"
        id="des"
        onInput={onChangeWrite}
        value={state.description}
        ></div>
    </form>
  );
}

export { FormNote };
