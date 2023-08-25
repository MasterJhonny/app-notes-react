import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles app
import "./App.css";

// import components
import { Home } from "./Home/Home";
import { EditNote } from "./EditNote/EditNote";
import { ViewNote } from "./ViewNote/ViewNote";
import { AddNote } from "./AddNote/AddNote";
import { config } from './config.js'; 

// generation number randon
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
// list color for backColor
const listColor = ['FD99FF', 'FF9E9E', '91F48F', 'FFF599', '9EFFFF', 'B69CFF'];
const API_URL = config.API_URL;

// reder App
function App() {
  const [notes, setNotes] = useState(null);

  // estableciento las notas nuvas
  const baseNote = { title: "", description: "" }
  const [newNote, setNewNote] = useState(baseNote);
  const [viewNote, setViewNote] = useState({});

  // function asycn get notes
  async function getNotes () {
    const response = await fetch(`${API_URL}/notes`);
    const data = await response.json();
    setNotes(data.reverse());
  }

  // function asycn add note
  async function addNote () {
    let { title, description } = newNote;
    let color = `${listColor[random(0, listColor.length - 1)]}`;

    if(!title){
      title = description.substr(0, 10) + '...';
    }
    if(title && description) {
      try {
        const response = await fetch(`${API_URL}/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            title,
            description,
            color,
          }),
        });
        await response.json();
  
      } catch (error) {
        console.error(error);
      }
    }
    setNewNote(baseNote);
    getNotes();
  }

  // function for update Note
  async function updateNote () {
    const { _id, title, description } = viewNote;

    // validate title and description
    if(title && description) {
      try {
        const response = await fetch(`${API_URL}/notes/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            title,
            description,
          }),
        });
        await response.json();
  
      } catch (error) {
        console.error(error);
      }
    }
    getNotes();
  }


  // falta del validar si borra la nota!!!!!
  // function deleteNote
  async function deleteNote() {
    const id = viewNote._id;

    try {
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: "DELETE"
      });
      await response.json();

    } catch (error) {
      console.error(error);
    }
    getNotes();
  }

  // use efect
  useEffect(() => {
    // setTimeout(getNotes, 2000);
    getNotes()
  }, [])

  // function to render note
  function renderNote(id) {
    const viewNote = notes.find(note => note._id === id);
    setViewNote(viewNote);
  }

  // desde here render router page
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Home 
            data={notes} 
            renderNote={renderNote}
          />
        }/>
        <Route exact path="/add" element={
          <AddNote 
            newNote={newNote} 
            setNewNote={setNewNote}
            addNote={addNote} 
          />
        }/>
        <Route exact path="/edit" element={
          <EditNote 
            viewNote={viewNote} 
            setViewNote={setViewNote}
            updateNote={updateNote}
          />
        }/>
        <Route exact path="/view" element={
          <ViewNote 
          title={viewNote.title}
          description={viewNote.description}
          deleteNote={deleteNote}
        />
        }/>
        <Route exact path="/fana" element={<h4>Fana</h4>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
