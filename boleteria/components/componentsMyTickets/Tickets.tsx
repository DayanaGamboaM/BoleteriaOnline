import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";
import { app } from "../../src/fireBase/app";

const firestore = getFirestore(app);

interface TicketsProps {
  passengerName: string;
  seatNumber: number;
  origin: string;
  destination: string;
}

const Tickets:React.FC<TicketsProps> = ({ passengerName, seatNumber, origin, destination }) => {
  const [availableTicket, setAvailableTicket] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore(app);
      try {
        const avaibletickets = collection(firestore, "tickets");
        const snapshot = await getDocs(avaibletickets);
        const tickets: DocumentData[] = snapshot.docs.map((doc) => doc.data());
        setAvailableTicket(tickets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [passengerName, seatNumber, origin, destination]);

  return (
    <div
      className="d-flex justify-content-between align-items-center flex-column"
      style={{ marginTop: "-50px", marginBottom: '20px'}}
    >
      {availableTicket.map((tick: DocumentData, index: number) => (
        <div
          className="card mt-5 text-center" key={index}
          style={{
            borderRadius: "10px",
            width: "100%",
            maxWidth: "900px",
            background: "#3C6E71",
            color: "white",
          }}
        >
          <div className="card-body mb-2" style={{marginTop: "25px"}}>
            <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
            <h5 className="card-title mb-3">Nombre de pasajero: {tick.passengerName}</h5>
            <h5 className="card-title mb-3">Número de Asiento: {tick.seatNumber}</h5>
            <h5 className="card-subtitle mb-3">{tick.origin}-{tick.destination}</h5>
            <h5 className="card-text mb-3">Fecha de salida: {tick.dateTravel}</h5>
            <h5 className="card-text mb-3">Hora de salida: {tick.departureTime}</h5>
            <h5 className="card-text mb-3">Hora de salida: {tick.arrivalTime}</h5>
            <h5 className="card-text">Precio Total: {tick.totalAmount}</h5>
            <div style={{ marginTop: "25px" }}>
              <a
                className="btn-tickes"
                href="#"
                style={{ marginRight: "25px" }}
              >
                Imprimir
              </a>
              <a className="btn-tickes" href="myTicketsQR">
                Tiquetes
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
