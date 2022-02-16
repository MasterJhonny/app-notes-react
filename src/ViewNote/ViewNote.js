import React from "react";


// import componetes
import { HeaderNote } from '../HeaderNote/HeaderNote';
import { BtnHeader } from '../BtnHeader/BtnHeader';
import { DisplayNote } from '../DisplayNote/DisplayNote';

function ViewNote ({ title, description, deleteNote, updateNote }) {

    return (
        <React.Fragment>
            <HeaderNote>
                <BtnHeader to="/" icon="btn--icon" left="left"/>
                <BtnHeader to="/" icon="btn--icon-delete" deleteNote={deleteNote} />
                <BtnHeader to="/edit" icon="btn--icon-edit" />
            </HeaderNote>
            <DisplayNote title={title} description={description} />
        </React.Fragment>
    );
}

export { ViewNote };