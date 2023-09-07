import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function PokemonDetail(props) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
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
  }, [id]);
  console.log(pokemon);
  if (!pokemon) return <h1>loading</h1>;
  return (
    <div className={types[0].toLowerCase() + " wrapper"}>
      <header>
        <div className="pokemon-name">
          <img
            onClick={handleClick}
            id="arrow-back"
            src="../../../icons/arrow_back.svg"
            alt=""
          />
          <h1>{name}</h1>
        </div>
        <div className="id">
          <p>#{id}</p>
        </div>
      </header>
      <div className="pokemon-div">
        <div className="buttons">
          <Link to={'/home/pokemon-details/'+ pokemon.previous_id}>
          <button>
            <img src="../../../icons/chevron_left.svg" alt="" />
          </button>
          </Link>
          {/* <img className="bkgnd-img" src="../../../icons/pokeball.svg" alt="" /> */}
          <img className="pokemon-img" src={image} alt="" />
          <Link  to={'/home/pokemon-details/'+ pokemon.next_id}>
          <button>
            <img src="../../../icons/chevron_right.svg" alt="" />
          </button>
          </Link>
        </div>
      </div>
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
              <div className="about-span">
                <img src="../../../icons/weight.svg" alt="" />
                <span className="about-value">{weight}</span>
              </div>
              <span className="about-type">Weight</span>
            </div>
            <div className="about-div line">
              <div className="about-span">
                <img id="ruler" src="../../../icons/straighten.svg" alt="" />
                <span className="about-value">{height}</span>
              </div>
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
              <div className="flex-value">
                <span>
                  {base_stats.hp}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="200"
                    value={base_stats.hp}
                  ></progress>
                </span>
              </div>
              <div className="flex-value">
                <span>
                  {base_stats.atk}
                  <progress
                    className="progress-bar"
                    max="200"
                    value={base_stats.atk}
                  ></progress>
                </span>
              </div>
              <div className="flex-value">
                <span>
                  {base_stats.def}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="200"
                    value={base_stats.def}
                  ></progress>
                </span>
              </div>
              <div className="flex-value">
                <span>
                  {base_stats.satk}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="200"
                    value={base_stats.satk}
                  ></progress>
                </span>
              </div>
              <div className="flex-value">
                <span>
                  {base_stats.sdef}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="200"
                    value={base_stats.sdef}
                  ></progress>
                </span>
              </div>
              <div className="flex-value">
                <span>
                  {base_stats.spd}
                  <progress
                    className="progress-bar"
                    id="file"
                    max="200"
                    value={base_stats.spd}
                  ></progress>
                </span>
              </div>
            </div>

            <ul className="stats-name">
              <li>HP</li>
              <li>ATK </li>
              <li>DEF</li>
              <li>SATK</li>
              <li>SDEF</li>
              <li>SPD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
