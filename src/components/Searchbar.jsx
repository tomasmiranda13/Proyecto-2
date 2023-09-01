import React, { useState} from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai#AiOutlineSearch";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    handleSearch(value)
  };

  return (
    <>
      <div className="input-wrapper">
        <AiOutlineSearch color="red" fontSize={"15px"} />

        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
