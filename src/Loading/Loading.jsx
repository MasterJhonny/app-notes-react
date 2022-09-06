import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="box-loading">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { Loading };
