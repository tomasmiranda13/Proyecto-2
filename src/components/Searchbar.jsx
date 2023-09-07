import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai#AiOutlineSearch";
import { RxCross1 } from "react-icons/rx";
function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    handleSearch(value);
  };
  const handleClearButton = () => {
    setSearchTerm("");
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
