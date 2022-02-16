import React from "react";

import "./HeaderNote.css";

function HeaderNote({ children }) {

  
  return (
    <div className="header__page">
      {children}
    </div>
  );
}

export { HeaderNote };
