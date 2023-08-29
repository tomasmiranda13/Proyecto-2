import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";

function PokemonDetail({ data: { name, type } }) {
  return (
    <div>
      <div className="wrapper">
        <div pokemon-img>
          <img src={img} alt="" />
        </div>
        <div className="pokemon-detail">
          <div className="types">
            <button>{type1}</button>
            <button>{type2}</button>
          </div>
          <div className="about-wrapper">
            <h2>About</h2>
            <div className="about">
              <div className="about-div">
                <span>{weight}</span>
                <span>Weight</span>
              </div>
              <div className="about-div line">
                <span className="">{height}</span>
                <span>Height</span>
              </div>
              <div className="about-div">
                <span>{ability}</span>
                <span>Moves</span>
              </div>
            </div>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="base-stats">
            <h2>Base Stats</h2>
            <div className="stats">
              <div className="stats-value">
                <span>{hp}</span>;<span>{atk}</span>;<span>{def}</span>;
                <span>{satk}</span>;<span>{sdef}</span>;<span>{spd}</span>;
              </div>

              <div className="stats-name">
                <span>HP</span>
                <span>ATK </span>
                <span>DEF</span>
                <span>SATK</span>
                <span>SDEF</span>
                <span>SPD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
