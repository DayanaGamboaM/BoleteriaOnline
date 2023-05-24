import Image from "next/image";
import React from "react";
import Calendar from "../../public/calendar.png";

const PersonalInformation = () => {
  return (
    <div>
      <div className="container-information position-relative bg-light">
        <div className="personal-information">
          <h4>Tus Datos Personales</h4>
        </div>

        <div className="name position-absolute top-0 start-0">
          <h5>Nombre</h5>
          <h4>Persona123</h4>
        </div>
        <div className="lastname position-absolute top-0 end-0">
          <h5>Apellido</h5>
          <h4>Apellido123</h4>
        </div>
        <div className="gender position-absolute bottom-0 start-0">
          <h5>Sexo</h5>
          <h4>F/M</h4>
        </div>

        <div id="vertical-line-gender"></div>
        <button id="button-gender">X</button>

        <div className="birth position-absolute bottom-0 end-0">
          <h5>Nacimiento</h5>
          <h4>01/01/01</h4>
        </div>
        <div id="vertical-line-birth"></div>
        <button className="btn-calendar">
          <Image src={Calendar} alt="Imagen del botón" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
