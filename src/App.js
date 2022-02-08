import React from "react";

// styles app
import "./App.css";

// import components
import { Home } from "./Home/Home";
import { EditNote } from "./EditNote/EditNote";

// data
const listNotes = [
  { title: "title 1", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 2", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 3", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 4", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 5", description: "lorem ipsum dolor sit amet, consectetur" },
  {
    title: "como hacer",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  { title: "prueba", description: "lorem ipsum dolor sit amet, consectetur" },
  {
    title: "como leer",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como hacer la tarea",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como comer feliz",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como ver la tele",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como estudiar bien",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como leer la biblia",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  { title: "title 12", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 22", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 31", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 41", description: "lorem ipsum dolor sit amet, consectetur" },
  { title: "title 8", description: "lorem ipsum dolor sit amet, consectetur" },
  {
    title: "como hacer las ",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "prueba de como",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como leer rapido",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como hacer la tarea mas rapido",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como comer feliz y sonriente",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como ver la tele en veloz",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como estudiar bien rapido",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "como leer la biblia y entender",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
];

function App() {
  const [stateApp, setStateApp] = React.useState("Home");
  const [notes, setNotes] = React.useState(listNotes);
  const [newNote, setNewNote] = React.useState({});

  function addNote() {
    if(newNote.title) {
      notes.unshift(newNote);
    } else if(newNote.description) {
      newNote.title = newNote.description;
      notes.unshift(newNote);
    }
  }

  switch (stateApp) {
    case "Home":
      return (
        <Home data={notes} stateApp={stateApp} setStateApp={setStateApp} />
      );
    case "Edit":
      return (
        <EditNote 
          stateApp={stateApp} 
          setStateApp={setStateApp} 
          setNewNote={setNewNote}
          addNote={addNote}
        />
      );
    default:
      return (
        <Home data={notes} stateApp={stateApp} setStateApp={setStateApp} />
      );
  }
}

export default App;
