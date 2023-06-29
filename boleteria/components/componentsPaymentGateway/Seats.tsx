import React, { useState } from "react";
import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import Seat from "/public/seat.png";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { app } from "../../src/fireBase/app";
import { getApp } from "firebase/app";

const firestore = getFirestore(app);

const Seats = () => {
  const [showSeats, setShowSeats] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const showBoxSeating = () => {
    setShowSeats(true);
  };

  const availableSeats = [1, 2, 3, 4, 5, 14, 16, 18, 23, 27, 32, 36, 39, 43, 47, 48, 50, 52]; // Ejemplo: Asientos disponibles

  const totalSeats = 53; // Total de asientos

  // Función para guardar los asientos seleccionados en Firebase
  const saveSelectedSeats = () => {
    const db = firebase.firestore();
    const seatingRef = db.collection("seating");

    selectedSeats.forEach((seatNumber) => {
      seatingRef.add({
        seatNumber: seatNumber,
      })
        .then(() => {
          console.log("Asiento guardado en Firebase: ", seatNumber);
        })
        .catch((error:any) => {
          console.error("Error al guardar el asiento en Firebase: ", error);
        });
    });
  };

  // Función para seleccionar un asiento
  const selectSeat = (seatNumber:any) => {
    if (selectedSeats.includes(seatNumber)) {
      // Si el asiento ya está seleccionado, lo eliminamos de los asientos seleccionados
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Si el asiento no está seleccionado, lo agregamos a los asientos seleccionados
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
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
              className="mr-3"
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
            <div className="columna-asientos">
              {Array.from({ length: totalSeats }, (_, index) => index + 1).map(
                (seatNumber) => (
                  <button
                    key={seatNumber}
                    className="asiento"
                    style={{
                      borderColor: availableSeats.includes(seatNumber)
                        ? "green"
                        : "red",
                    }}
                    disabled={!availableSeats.includes(seatNumber)}
                    onClick={() => selectSeat(seatNumber)}
                  >
                    {seatNumber}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5">
            <a className="principalButton" onClick={() => setShowSeats(false)}>
              <BsDoorClosed /> Cerrar
            </a>
            <button className="principalButton" onClick={saveSelectedSeats}>
              Guardar selección
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seats;
