import { useState, useEffect } from "react";
import Logo from "../../public/icons/pokeballlogo.svg";
import Modal from "../components/Modal/Modal";
import ButtonModal from "../components/Modal/Button";
import Pokecard from "../components/Pokecard";
import SearchBar  from "../components/Searchbar";
import "./Home.css";

function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("number");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemones, setPokemones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundPokemon, setFoundPokemon] = useState([]);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSort = (sortedData) => {
    setPokemones(sortedData);
  };

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

  const handleOutsideClick = (event) => {
    console.log(handleOutsideClick);
    if (event.target === event.currentTarget) {
      setModalActive(false);
    }
  };

  return (
    <>
      <div className="home-wrapper">
        <header>
          <img className="pokeball-logo" src={Logo} alt="Logo pokeball" />
          <h1>Pokédex</h1>
        </header>
        <div className="flex">
          <SearchBar handleSearch={handleSearch} resetPokemon={setFoundPokemon} />
          <ButtonModal
            modalActive={modalActive}
            setModalActive={setModalActive}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div
            className="modal-container"
            style={{ visibility: modalActive ? "visible" : "hidden" }}
            onClick={handleOutsideClick}
          >
            <Modal
              modalActive={modalActive}
              setModalActive={setModalActive}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              pokemones={pokemones}
              onSort={handleSort}
            />
          </div>
        </div>

        <main className="main-pokecard">
          <div>

           

            {foundPokemon.length == 0 ? (
              <div className="main-pokecard-wrapper flex-center">

                {pokemones?.map((pokemon, index) => {
                  return (
                    <Pokecard
                      key={index}
                      id={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.image}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="main-pokecard-wrapper flex-start">
                {foundPokemon?.map((pokemon, index) => {
                  return (
                    <Pokecard
                      key={index}
                      id={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.image}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
