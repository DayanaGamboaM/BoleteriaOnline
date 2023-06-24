import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const SendEmail = () => {
  return (
    <div className="container" style={{}}>
      <div className="card-section">
        <div className="container">
          <div
            className="card-email bg-white d-flex flex-row flex-wrap align-items-center justify-content-between"
            style={{ position: "relative", top: "155px" }}
          >
            <h5 id="send">Envío de Email</h5>
            <div className="d-flex flex-row align-items-center">
              <h5 id="deactive">Desactivar</h5>
              <ToggleButton />
              <h5 id="activate">Activar</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
