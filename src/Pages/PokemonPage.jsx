import React, { useState, useEffect } from "react";
import PokemonDetail from "../components/PokemonDetail";

function PokemonPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemones, setPokemones] = useState(null);
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

  return (
    <div>
      {pokemones &&
        pokemones.map((pokemon) => {
          return <PokemonDetail key={pokemon.id} data={pokemon} />;
        })}
    </div>
  );
}

export default PokemonPage;
