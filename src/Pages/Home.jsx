import React from "react";
import Logo from "../../public/icons/pokeball.svg";
import Modal from "../components/Modal";
import SearchBar from "../components/Searchbar";
import './Home.css'

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <header>
          <img className="pokeball-logo" src={Logo} alt="Logo pokeball" />
          <h1>Pokédex</h1>
        </header>
        <div className="flex">
       <SearchBar/>
        <Modal /></div>

        <main></main>
      </div>
    </>
  );
}

export default Home;
