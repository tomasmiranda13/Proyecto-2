import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";

function PokemonDetail({
  data: {
    name,
    image,
    type1,
    type2,
    weight,
    height,
    ability,
    description,
    base_stats,
  },
}) {
  return (
    <div>
      <div className="wrapper">
        <div pokemon-img>
          <img src={image} alt="" />
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
                {base_stats.map((stat) => {
                  <span>{stat.hp}</span>;
                  <span>{stat.atk}</span>;
                  <span>{stat.def}</span>;
                  <span>{stat.satk}</span>;
                  <span>{stat.sdef}</span>;
                  <span>{stat.spd}</span>;
                })}
              </div>
              z
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
