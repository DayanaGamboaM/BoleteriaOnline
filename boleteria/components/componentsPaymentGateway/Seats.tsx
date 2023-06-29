import React, { useState } from "react";
import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import Seat from "/public/seat.png";

const Seats = () => {
  const [showSeats, setShowSeats] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const showBoxSeating = () => {
    setShowSeats(true);
  };

  const availableSeats = [1, 2, 3, 4, 5, 14, 16, 18, 23, 27, 32, 36, 39, 43, 47, 48, 50, 52]; // Ejemplo: Asientos disponibles

  const totalSeats = 53; // Total de asientos

  const handleSeatClick = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < 5 && availableSeats.includes(seatNumber)) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-black" style={{ backgroundColor: "#D9D9D9", maxWidth: "35rem" }}>
        <div className="card-header">
          <div className="d-flex align-items-center mr-3">
            <span className="cuadro-azul text-white mr-5">4</span>
            <span>Asientos</span>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Selecciona tus asientos. Máximo 5</h5>

          <button className="btn1" onClick={showBoxSeating}>
            <Image src={Seat} alt="Logo de asiento" className="mr-3" width={35} />
            Seleccionar espacios
          </button>
          {selectedSeats.length > 0 && (
            <span className="selected-seats">Asientos: {selectedSeats.join(", ")}</span>
          )}
        </div>
      </div>

      {showSeats && (
        <div className="cuadro-asientos mt-3" style={{ maxWidth: "35rem" }}>
          <h3>Asientos Disponibles</h3>
          <div className="fila-asientos">
            <div className="columna-asientos">
              {Array.from({ length: totalSeats }, (_, index) => index + 1).map((seatNumber: number) => (
                <button
                  key={seatNumber}
                  className={`asiento ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
                  style={{
                    border: `2px solid ${selectedSeats.includes(seatNumber) ? "red" : availableSeats.includes(seatNumber) ? "green" : "red"}`,
                  }}
                  disabled={!availableSeats.includes(seatNumber) || selectedSeats.length === 5}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </button>
              ))}
            </div>
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
