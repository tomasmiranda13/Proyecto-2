import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PokemonPage from "./Pages/PokemonPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Home from "./pages/Home";

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
