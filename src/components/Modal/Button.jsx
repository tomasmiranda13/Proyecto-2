import React from 'react'
import "./Modal.css";

function ButtonModal({ modalActive, setModalActive, selectedOption }) {
    const handleOpenModal = () => {
        setModalActive(!modalActive);
        console.log("handleOpenModal");
    };
  return (
    <div><button id="myBtn" onClick={handleOpenModal}>
    {selectedOption === "name" ? <u>A</u> : <span>#</span>}
  </button></div>
  )
}

export default ButtonModal