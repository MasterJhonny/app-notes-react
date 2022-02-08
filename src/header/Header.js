import React from "react";
import './Header.css';


function Header ({ state, setState }) {

    // function oninputchange
    const onSearchInput = (event) => {
        setState(event.target.value)
    }

    return (
        <div className="header">
            <div className="header__text">
                <h2>Notes</h2>
            </div>
            <div className="header__acctions">
                <label className="search" >
                    <span className="search__icon" ></span>
                    <input
                        onChange={onSearchInput} 
                        className="search__input"
                    />
                </label>
                <button className="btn__menu"></button>
            </div>
        </div>
    )
}

export { Header };