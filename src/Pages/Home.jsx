import React, { useState, useEffect } from "react";
import Logo from "../../public/icons/pokeball.svg";
import Modal from "../components/Modal/Modal";
import SearchBar from "../components/Searchbar";
import "./Home.css";

function Home() {
  const [error, setError] = useState(null);
  const [foundPokemon, setFoundPokemon] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/pokemones")
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
        setPokemones(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      });
  }, []);
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredPokemon = pokemones.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
        (value !== "0" && pokemon.id.includes(value))
    );
    console.log(filteredPokemon);
    setFoundPokemon(filteredPokemon);
  };
  return (
    <>
      <div className="home-wrapper">
        <header>
          <img className="pokeball-logo" src={Logo} alt="Logo pokeball" />
          <h1>Pokédex</h1>
        </header>
        <div className="flex">
          <SearchBar handleSearch={handleSearch} />
          <Modal />
        </div>
        {foundPokemon.length > 0 &&
          foundPokemon.map((pokemon) => (
            <div key={pokemon.id}>
              <h2>Información del Pokémon</h2>
              <p>ID: {pokemon.id}</p>
              <p>Nombre: {pokemon.name}</p>
            </div>
          ))}

        <main></main>
      </div>
    </>
  );
}

export default Home;
