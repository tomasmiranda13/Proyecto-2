import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PokemonPage from "./Pages/PokemonPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PokemonDetail from "./components/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    /* errorElement: <ErrorPage /> */
  },
  {
    path: "/pokemon-details/:id",
    element: <PokemonDetail />,
    /* errorElement: <ErrorPage />, */
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
