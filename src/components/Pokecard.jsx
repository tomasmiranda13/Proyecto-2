import React from "react";
import "./Pokecard.css";


function Pokecard(props) {
  return (
    <>
      <div className="pokecard-container">
        <p>#{props.id}</p>
        <img className="" src={props.image} alt="" />
        <p><b>{props.name}</b></p>
      </div>
    </>
  );
}

export default Pokecard;
