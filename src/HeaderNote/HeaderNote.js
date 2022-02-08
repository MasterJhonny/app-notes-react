import React from "react";

import "./HeaderNote.css";

function HeaderNote({ stateApp, setStateApp, addNote }) {

  const [loading, setLoading] = React.useState(false);

  const btnOnClickHome = () => {
    setStateApp('Home');
    addNote();
  };

  const btnOnClickSave = () => {
    setLoading(true);
  }

  const styleLoading = () => {
    if(loading){
      return {
        backgroundPosition: 'center',
        backgroundImage: 'url(https://samherbert.net/svg-loaders/svg-loaders/oval.svg)',
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }

  return (
    <div className="header">
        <button className="header__btn btn--icon" onClick={btnOnClickHome}></button>
      <div className="header__acctions--btns">
        {/* <button className="header__btn btn--icon-save" style={styleLoading()} onClick={btnOnClickSave}></button> */}
      </div>
    </div>
  );
}

export { HeaderNote };
