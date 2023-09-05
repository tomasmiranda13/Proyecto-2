import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PokemonPage from "./Pages/PokemonPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PokemonDetail from "./components/PokemonDetail";
import { ErrorPage } from "./Pages/ErrorPage";
import { useRouteError } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
     errorElement: <ErrorPage /> 
  },
  {
    path: "/home/pokemon-details/:id",
    element: <PokemonPage/>,
     errorElement: <ErrorPage />, 
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
