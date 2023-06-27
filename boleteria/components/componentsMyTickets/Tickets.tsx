import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; // Asegúrate de tener esta línea de importación

import { app } from "../../src/fireBase/app";

const firestore = getFirestore(app);

interface TicketsProps {
  passengerName: string;
  seatNumber: number;
  origin: string;
  destination: string;
  dateTravel: string;
  hours: string,
  arrivalTime: string;
  departureTime: string;

}

const Tickets: React.FC<TicketsProps> = ({
  passengerName,
  seatNumber, dateTravel,
  origin, destination, hours,
  arrivalTime,
  departureTime }) => {

  const [availableTicket, setAvailableTicket] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const avaibletickets = collection(firestore, "tickets");
        const snapshot = await getDocs(avaibletickets);
        const tickets: DocumentData[] = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const data = docSnapshot.data();
            const idTravelRef = data.idTravel;
            const idScheduleRef = data.idSchedule;
            const idRoutesRef = data.idRoutes;

            // Fetch the referenced data
            const idTravelDoc = doc(firestore, "travels", idTravelRef);
            const idScheduleDoc = doc(firestore, "schedules", idScheduleRef);
            const idRoutesDoc = doc(firestore, "routes", idRoutesRef);

            const idTravelSnapshot = await getDoc(idTravelDoc);
            const idScheduleSnapshot = await getDoc(idScheduleDoc);
            const idRoutesSnapshot = await getDoc(idRoutesDoc);

            const idTravelData = idTravelSnapshot.data();
            const idScheduleData = idScheduleSnapshot.data();
            const idRoutesData = idRoutesSnapshot.data();

            const ticket = {
              ...data,
              idTravel: idTravelData,
              idSchedule: idScheduleData,
              idRoutes: idRoutesData
            };
            console.log("Ticket:", ticket);
            return ticket;
          })
        );
        console.log(tickets);
        setAvailableTicket(tickets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [passengerName,
    seatNumber, dateTravel,
    origin, destination, hours,
    arrivalTime,
    departureTime]);

  return (
    <div
      className="d-flex justify-content-between align-items-center flex-column"
      style={{ marginTop: "-50px", marginBottom: "20px" }}
    >
      {availableTicket.map((ticket: DocumentData, index: number) => (
        <div
          className="card mt-5 text-center"
          key={index}
          style={{
            borderRadius: "10px",
            width: "100%",
            maxWidth: "900px",
            background: "#3C6E71",
            color: "white"
          }}
        >
          <div className="card-body mb-2" style={{ marginTop: "25px" }}>
            <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
            <h5 className="card-title mb-3">Nombre de pasajero: {ticket.passengerName}</h5>
            <h5 className="card-title mb-3">Número de Asiento: {ticket.seatNumber}</h5>
            <h5 className="card-subtitle mb-3">{ticket.idTravel.origin} - {ticket.idTravel.destination}</h5>
            <h5 className="card-text mb-3">Fecha de salida: {ticket.idTravel.dateTravel}</h5>
            <h5 className="card-text mb-3">Hora de salida: {ticket.departureTime}</h5>
            <h5 className="card-text mb-3">Hora de llegada: {ticket.arrivalTime}</h5>
            <h5 className="card-text">Precio Total:</h5>
            <div style={{ marginTop: "25px" }}>
              <a className="btn-tickes" href="#" style={{ marginRight: "25px" }}>
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