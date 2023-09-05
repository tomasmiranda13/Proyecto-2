import React from "react";
import './ErrorPage.css'
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
  return (
    <>
    <div className="wrapper-error" >
      <h1 className="h1Style">Error 404</h1>
      <p>
        ¡Lo siento, la página que estás buscando no se encuentra en la Pokédex!
      </p>
      <p>
        Puedes regresar a la <a href="/">página de inicio</a> o explorar otros
        Pokémon.
      </p>
    </div>
    </>
  );
};
