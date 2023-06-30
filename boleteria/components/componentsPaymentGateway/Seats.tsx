import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import Seat from "/public/seat.png";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  doc,
  getDoc,
  where,
  query,
  updateDoc
} from "firebase/firestore";
import { app } from "../../src/fireBase/app";
const firestore = getFirestore(app);

const Seats = () => {
  const [showSeats, setShowSeats] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);

  const showBoxSeating = () => {
    setShowSeats(true);
  };

  const totalSeats = 53;

  const handleSeatClick = async (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < 5 && !occupiedSeats.includes(seatNumber.toString())) {
      setSelectedSeats([...selectedSeats, seatNumber]);

      const seatingRef = collection(firestore, "seating");
      const seatDocRef = doc(seatingRef, seatNumber.toString());
      await updateDoc(seatDocRef, { occupation: "s" });

      const updatedOccupiedSeats = [...occupiedSeats, seatNumber.toString()];
      setOccupiedSeats(updatedOccupiedSeats);
    }
  };

  const fetchSeatData = async (): Promise<string[]> => {
    const seatingRef = collection(firestore, "seating");
    const q = query(seatingRef, where("occupation", "==", "s"));
    const querySnapshot = await getDocs(q);

    const occupiedSeats: string[] = [];
    querySnapshot.forEach((doc) => {
      const seatNumber = doc.data().seat;
      occupiedSeats.push(seatNumber);
    });

    return occupiedSeats;
  };

  useEffect(() => {
    const getOccupiedSeats = async () => {
      const seats: string[] = await fetchSeatData();
      setOccupiedSeats(seats);
    };

    getOccupiedSeats();
  }, []);

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
              {Array.from({ length: totalSeats }, (_, index) => index + 1).map((seatNumber: number) => {
                const isOccupied = occupiedSeats.includes(seatNumber.toString());
                const isSelected = selectedSeats.includes(seatNumber);
                const seatStyle = {
                  border: `2px solid ${isSelected || isOccupied ? "red" : "green"}`,
                };

                const handleButtonClick = isOccupied ? undefined : () => handleSeatClick(seatNumber);

                return (
                  <button
                    key={seatNumber}
                    className={`asiento ${isSelected ? "selected" : ""}`}
                    style={seatStyle}
                    disabled={isOccupied || selectedSeats.length === 5}
                    onClick={handleButtonClick}
                  >
                    {seatNumber}
                  </button>
                );
              })}
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
