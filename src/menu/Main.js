import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <div className="menu">
      {!props.statusLoad ? (
        props.children
      ) : (
        <ul className="menu__list">{props.children}</ul>
      )}
    </div>
  );
}

export { Main };
