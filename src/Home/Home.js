import React from "react";

// import components
import { Header } from "../header/Header";
import { Main } from "../menu/Main";
import { NoteItem } from "../NoteItem/NoteItem";
import { CreateButton } from "../CreateButton/CreateButton";



function Home({ data, setStateApp }) {
  const [state, setState] = React.useState("");

  let expre = new RegExp(state, "i");
  let nombres = data.filter(note => expre.test(note.title));

  // function addNote(note) {
  //   notes.push(note);
  //   setNotes([...notes]);
  // }


  return (
    <React.Fragment>
      <Header state={state} setState={setState} />
      <Main>
        {nombres.map(note => (
          <NoteItem key={note.title} title={note.title} />
        ))}
      </Main>
      <CreateButton setStateApp={setStateApp}/>
    </React.Fragment>
  );
}

export { Home };
