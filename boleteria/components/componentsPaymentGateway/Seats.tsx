import React, { useState } from "react";
import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import Seat from "/public/seat.png";

const Seats = () => {
  const [showSeats, setShowSeats] = useState(false);

  const showBoxSeating = () => {
    setShowSeats(true);
  };

  return (
    <div className="container mt-5">
      <div
        className="card text-black "
        style={{ backgroundColor: "#D9D9D9", maxWidth: "35rem" }}
      >
        <div className="card-header">
          <div className="d-flex align-items-center mr-3">
            <span className="cuadro-azul text-white mr-5">4</span>
            <span>Asientos</span>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Selecciona tus asientos. Máximo 5</h5>

          <button className="btn1" onClick={showBoxSeating}>
            <Image
              src={Seat}
              alt="Logo de asiento"
              className="imr-3"
              width={35}
            />
            Seleccionar espacios
          </button>
        </div>
      </div>

      {showSeats && (
        <div className="cuadro-asientos mt-3" style={{ maxWidth: "35rem" }}>
          <h3>Asientos Disponibles</h3>
          <div className="fila-asientos">
            <button className="asiento">1</button>
            <button className="asiento">2</button>
            <div className="espacio"></div>
            <button className="asiento">3</button>
            <button className="asiento">4</button>
          </div>
          <div className="fila-asientos">
            <button className="asiento">5</button>
            <button className="asiento">6</button>
            <div className="espacio"></div>
            <button className="asiento">7</button>
            <button className="asiento">8</button>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5">
            <a className="principalButton" onClick={() => setShowSeats(false)}>
              <BsDoorClosed /> Cerrar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seats;
