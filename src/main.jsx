import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter ,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
  {
    path: "/home/pokemon-details/:id",
    element: <PokemonPage/>,
    errorElement: <ErrorPage />,
    
  }],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Home/>
    <RouterProvider router={router}/>
  </>,
)
