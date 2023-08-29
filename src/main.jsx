import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PokemonPage from './Pages/PokemonPage';
import { RouterProvider, createBrowserRouter ,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonPage/>,
    /* errorElement: <ErrorPage /> */
    children: [
  {
    path: "/home/pokemon-details/:id",
    element: <PokemonPage/>,
    /* errorElement: <ErrorPage />, */
    
  }],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
