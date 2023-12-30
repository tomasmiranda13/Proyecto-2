import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";
import { AiOutlineSearch } from "react-icons/ai#AiOutlineSearch";
import { RxCross1 } from "react-icons/rx";
function SearchBar({ handleSearch, resetPokemon }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    handleSearch(value);
  };
  const handleClearButton = (event) => {
    setSearchTerm("");
    resetPokemon([]);
  };

  return (
    <>
      <div className="input-wrapper">
        <AiOutlineSearch color="red" fontSize={"16px"} />

        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        {searchTerm.length > 0 && (
          <RxCross1
            onClick={handleClearButton}
            className="clear-button"
            color="red"
            fontSize={"16px"}
          />
        )}
      </div>
    </>
  );
}

export default SearchBar;
