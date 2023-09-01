import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";
import { Link, useParams } from "react-router-dom";

function PokemonDetail() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const { name, image, types, weight, height, moves, description, base_stats } =
    pokemon || {};
  useEffect(() => {
    fetch("http://localhost:3000/pokemones/" + id)
      .then((response) => {
        if (!response.ok) {
          setError(
            "No se han encontrado pokemones o hay algun error, intente recargar la pagina"
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  console.log(pokemon);
  if (!pokemon) return <h1>loading</h1>;
  return (
    <div className={types[0].toLowerCase()}>
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
            {types.map((type) => (
              <div className={type.toLowerCase()}>
                <span>{type}</span>
              </div>
            ))}
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
                {moves.map((move) => (
                  <span className="about-value">{move}</span>
                ))}
                <span className="about-type">Moves</span>
              </div>
            </div>
          </div>
          <div className="description ">
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
                  ></progress>
                </span>
                <span>
                  {base_stats.atk}{" "}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.atk}
                  ></progress>
                </span>
                <span>
                  {base_stats.def}{" "}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.def}
                  ></progress>
                </span>
                <span>
                  {base_stats.satk}{" "}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.satk}
                  ></progress>
                </span>
                <span>
                  {base_stats.sdef}{" "}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.sdef}
                  ></progress>
                </span>
                <span>
                  {base_stats.spd}{" "}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="100"
                    value={base_stats.spd}
                  ></progress>
                </span>
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
