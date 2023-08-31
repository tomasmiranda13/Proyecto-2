import React from 'react'
import './SearchBar.css'
import { AiOutlineSearch } from "react-icons/ai#AiOutlineSearch";

function SearchBar() {
  return ( <>
    <div className="input-wrapper">
    <AiOutlineSearch color="red" fontSize={'15px' } />
    <input type="text" placeholder="Search" />
   
  </div></>
  )
}

export default SearchBar