import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { BsDoorClosed, BsSaveFill } from "react-icons/bs";

const SendEmail: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);

  const handleToggle = (isChecked: boolean) => {
    setChecked(isChecked);
    console.log("El botón de alternancia fue activado/desactivado:", isChecked);
  };

  const handleSaveButtonClick = async () => {
    setSaveButtonClicked(true);
    if (isChecked) {
      try {
        const response = await fetch("/api/mailerApi", { method: "POST" });
        if (response.ok) {
          console.log("Correo electrónico enviado");
        } else {
          console.log("Error al enviar el correo electrónico");
        }
      } catch (error) {
        console.log("Error al enviar el correo electrónico", error);
      }
    } else {
      console.log("El botón de alternancia debe estar activado para enviar el correo");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card-section">
          <div className="container">
            <div
              className="card-email bg-white d-flex flex-row flex-wrap align-items-center justify-content-between"
              style={{ position: "relative", top: "155px" }}
            >
              <h5 id="send">Envío de Email</h5>
              <div className="d-flex flex-row align-items-center">
                <h5 id="deactive">Desactivar</h5>
                <ToggleButton onToggle={handleToggle} />
                <h5 id="activate">Activar</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "70px" }}>
        <div>
          <div
            className="container mb-3 d-flex flex-column justify-content-center align-items-center mt-5"
            style={{ position: "relative", top: "-30px", paddingTop: "100px" }}
          >
            <a className="principalButton" href="#" onClick={handleSaveButtonClick}>
              <BsSaveFill className="mr-3" /> Guardar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
