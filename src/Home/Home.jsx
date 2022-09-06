import React, { useState } from "react";
import { Link } from "react-router-dom";

// import components
import { Header } from "../header/Header";
import { Main } from "../menu/Main";
import { NoteItem } from "../NoteItem/NoteItem";
import { CreateButton } from "../CreateButton/CreateButton";
import { Loading } from "../Loading/Loading";


function Home({ data, renderNote }) {
  const [state, setState] = useState("");

  let expre = new RegExp(state, "i");
  let nombres = data ? data.filter(note => expre.test(note.title)) : null;

  return (
    <React.Fragment>
      <Header 
        state={state} 
        setState={setState} 
      />
      <Main statusLoad={nombres}>
        {
          !nombres && <Loading/>
        }
        {
          nombres && 
          nombres.map(note => (
          <Link to="/view" key={note._id}>
            <NoteItem 
              id={note._id}
              title={note.title}
              renderNote={renderNote}
              color={note.color}
            />
          </Link>
        ))}
      </Main>
      <CreateButton/>
    </React.Fragment>
  );
}

export { Home };
