import React from "react";
import ToggleButton from "./ToggleButton";

const SendEmail = () => {
  return (
    <div className="container">
      <div className="card-section">
        <div className="container">
          <div className="card-email bg-white mb-3 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <h5 id="send">Envío de Email</h5>
            <div className="d-flex flex-row align-items-center">
              <h5 id="deactive">Desactivar</h5>
              <div className="toggle-container mx-3">
                <ToggleButton />
              </div>
              <h5 id="activate">Activar</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SendEmail;
