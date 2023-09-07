import React, { useState, useEffect } from "react";
import PokemonDetail from "../components/PokemonDetail";
import { useParams } from "react-router-dom";


function PokemonPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/pokemones")
      .then((response) => {
        console.log("pokemon " + id);
        if (!response.ok) {
          setError(
            "No se han encontrado pokemones o hay algun error, intente recargar la pagina"
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const pokemon = data.find((x) => x.id == id);
        console.log("found poke " + pokemon);
        setPokemon(pokemon);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {pokemon != null ? (
        <div>
          <PokemonDetail key={pokemon.id} data={pokemon} />
        </div>
      ) : null}
    </>
  );
}

export default PokemonPage;
