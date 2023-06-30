import React, { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import { BsDoorClosed, BsSaveFill } from "react-icons/bs";
import { auth } from "../../src/fireBase/app"; // Importa la instancia de autenticación de Firebase
import Swal from "sweetalert2";

interface User {
  id: string;
  email: string | null;
}

const SendEmail: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Verifica si hay un usuario activo en el estado cada vez que cambie
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Si hay un usuario activo, establece el estado con la información del usuario
        setCurrentUser({
          id: user.uid, // Puedes usar el UID del usuario como identificador único
          email: user.email,
        });
      } else {
        // Si no hay un usuario activo, establece el estado en null
        setCurrentUser(null);
      }
    });

    // Limpia el evento de cambio de autenticación cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const handleToggle = (isChecked: boolean) => {
    setChecked(isChecked);
    console.log("El botón de alternancia fue activado/desactivado:", isChecked);
  };

  const handleSaveButtonClick = async () => {
    setSaveButtonClicked(true);
    if (isChecked) {
      if (currentUser && currentUser.email) { // Verifica si currentUser y currentUser.email no son nulos
        try {
          // Envía el correo solo al usuario activo
          const response = await fetch(`/api/mailerApi?email=${encodeURIComponent(currentUser.email)}`, { method: 'POST' });
          if (response.ok) {
            Swal.fire("¡Éxito!", "Ha sido enviado tu tiquete al correo", "success")
            console.log("Correo electrónico enviado");
          } else {
            console.log("Error al enviar el correo electrónico");
          }
        } catch (error) {
          console.log("Error al enviar el correo electrónico", error);
        }
      } else {
        console.log("No se encontró un usuario activo o un correo electrónico válido");
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
