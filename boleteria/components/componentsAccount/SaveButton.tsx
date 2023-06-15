import React from "react";
import { BsDoorClosed, BsSaveFill } from "react-icons/bs";

const SaveButton = () => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div>
        <div
          className="container mb-3 d-flex flex-column justify-content-center align-items-center mt-5"
          style={{ position: "relative", top: "-30px", paddingTop: "100px" }}
        >
          <a className="principalButton" href="#">
            <BsSaveFill className="mr-3" /> Guardar
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveButton;
