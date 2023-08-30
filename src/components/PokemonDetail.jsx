import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";
import { Link } from "react-router-dom";

function PokemonDetail({
  data: {
    id,
    name,
    image,
    type1,
    type2,
    weight,
    height,
    moves,
    description,
    base_stats,
  },
}) {
  return (
    <div>
      <div className="wrapper">
        <header>
          <div className="pokemon-name">
            <img id="arrow-back" src="./icons/arrow_back.svg" alt="" />
            <h1>{name}</h1>
          </div>
          <div className="id">
            <img src="./icons/tag.svg" alt="" />
            <p>{id}</p>
          </div>
        </header>
        <img className="pokemon-img" src={image} alt="" />
        <div className="pokemon-detail">
          <div className="types">
            <div>{type1}</div>
            <div>{type2}</div>
          </div>
          <div className="about-wrapper">
            <h2>About</h2>
            <div className="about">
              <div className="about-div">
                <span className="about-value">
                  <img src="./icons/weight.svg" alt="" />
                  {weight}
                </span>
                <span className="about-type">Weight</span>
              </div>
              <div className="about-div line">
                <span className="about-value">{height}</span>
                <span className="about-type">Height</span>
              </div>
              <div className="about-div">
                <span className="about-value">{moves}</span>
                <span className="about-type">Moves</span>
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
                <span>
                  {base_stats.hp}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.hp}
                  >
                    70%
                  </progress>
                </span>
                <span>{base_stats.atk}</span>
                <span>{base_stats.def}</span>
                <span>{base_stats.satk}</span>
                <span>{base_stats.sdef}</span>
                <span>{base_stats.spd}</span>
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
