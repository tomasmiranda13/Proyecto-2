import React from "react";
import "./Pokecard.css";
import { Link } from "react-router-dom";

function Pokecard(props) {
  return (
    <>
      <Link to={`/home/pokemon-details/${props.id}`} style={{textDecoration: 'none', color: '#212121'}}>
        <div className="pokecard-container">
          <p>#{props.id}</p>
          <img className="" src={props.image} alt="" />
          <p>
            <b>{props.name}</b>
          </p>
        </div>
      </Link>
    </>
  );
}

export default Pokecard;
