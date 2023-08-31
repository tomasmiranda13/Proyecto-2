import React from "react";
import "./Modal.css";
import { useState, useEffect } from "react";

function Modal({ modalActive, setModalActive, selectedOption, setSelectedOption}) {
  const [visible, setVisible] = useState(false);
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCloseModal = () => {
    setModalActive(false);
    console.log("handleCloseModal llamada");
  };

  const handleChangeOption = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption)
    console.log("selectedOption:", event.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:3000/pokemones")
      .then((response) => {
        if (!response.ok) {
          setError(
            "No se han encontrado pokemones o hay algun error, intente recargar la pagina"
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPokemones(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSortByNumber = () => {
    const sortedPokemones = [...pokemones];
    sortedPokemones.sort((a, b) => {
      const idA = parseInt(a.id);
      const idB = parseInt(b.id);
      return idA - idB;
    });
    setPokemones(sortedPokemones);
    handleCloseModal();
    console.log(sortedPokemones);
  };

  const handleSortByName = () => {
    const sortedPokemones = [...pokemones];
    sortedPokemones.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    setPokemones(sortedPokemones);
    handleCloseModal();
    console.log(sortedPokemones);
  };

  return (
    <>
      <div className="modal-wrapper">
        {console.log("Renderizando modal", visible)}
        
        {modalActive && (
            <div id="myModal">
              <div className="modal-box">
                <p>
                  <b>Sort by:</b>
                </p>
                <div className="modal-select">
                  <div className="select-box">
                    <input
                      className="input-pokemon"
                      id="option1"
                      type="radio"
                      name="pokemones-filter"
                      value="number"
                      checked={selectedOption === "number"}
                      onClick={handleSortByNumber}
                      onChange={handleChangeOption}
                    />
                    <label htmlFor="option1">Number</label>
                  </div>
                  <div className="select-box">
                    <input
                      className="input-pokemon"
                      id="option2"
                      type="radio"
                      name="pokemones-filter"
                      value="name"
                      checked={selectedOption === "name"}
                      onClick={handleSortByName}
                      onChange={handleChangeOption}
                    />
                    <label htmlFor="option2">Name</label>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
    </>
  );
}

export default Modal;
