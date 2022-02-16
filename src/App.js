import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles app
import "./App.css";

// import components
import { Home } from "./Home/Home";
import { EditNote } from "./EditNote/EditNote";
import { ViewNote } from "./ViewNote/ViewNote";
import { AddNote } from "./AddNote/AddNote";

// reder App
function App() {
  const [notes, setNotes] = useState([]);

  // estableciento las notas nuvas
  const baseNote = { title: "", description: "" }
  const [newNote, setNewNote] = useState(baseNote);
  const [viewNote, setViewNote] = useState({});

  // function asycn get notes
  async function getNotes () {
    const response = await fetch('http://192.168.1.101:8080/api/v1/notes');
    const data = await response.json();
    setNotes(data.reverse());
  }

  // function asycn add note
  async function addNote () {
    let { title, description } = newNote;
    if(!title){
      title = description.substr(0, 10) + '...';
    }
    if(title && description) {
      try {
        const response = await fetch("http://192.168.1.101:8080/api/v1/notes", {
          method: "POST",
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
    setNewNote(baseNote);
    getNotes();
  }

  // function for update Note
  async function updateNote () {
    const { id, title, description } = viewNote;
    if(title && description) {
      try {
        const response = await fetch(`http://192.168.1.101:8080/api/v1/notes/${id}`, {
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

  // function deleteNote
  async function deleteNote() {
    const id = viewNote.id;
    console.log(viewNote);
    try {
      const response = await fetch(`http://192.168.1.101:8080/api/v1/notes/${id}`, {
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
    getNotes();
  }, [])

  // function to render note
  function renderNote(id) {
    const viewNote = notes.find(note => note.id === id);
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
