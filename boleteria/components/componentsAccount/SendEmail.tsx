import React from "react";
import ToggleButton from "./ToggleButton";

const SendEmail = () => {
  return (
    <div className="container">
      <div className="card-section">
        <div className="container">
          <div
            className="card-email bg-white mb-3 d-flex flex-row flex-wrap align-items-center justify-content-between"
            style={{ width: "1400px", maxWidth: "100%", height: "100px" }}
          >
            <h5 id="send">Envío de Email</h5>
            <h5 id="deactive">Desactivar</h5>
            <div className="togglebutton">
              <ToggleButton />
            </div>
            <h5 id="activate">Activar</h5>
          </div>
        </div>
      </div>
      <div className=''>
            <div className=''>
              <div className=''>
                  <button id='btn-save'>Guardar</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default SendEmail;
