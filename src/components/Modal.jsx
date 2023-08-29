import React from "react";
import Tag from "../../../../../../public/icons/tag.svg";

function Modal() {
  return (
    <>
      <div className="myModal">
        <div className="modal-container">
          <button>
            <img src={Tag} alt="" />
          </button>
          <p>Sort by:</p>
          <input type="radio" />
          <label htmlFor="opcion1">Number</label>
          <input type="radio" />
          <label htmlFor="opcion2">Name</label>
        </div>
      </div>
    </>
  );
}

export default Modal;
