import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  doc,
  getDoc,
  where,
  query
} from "firebase/firestore";
import { app, auth } from "../../src/fireBase/app";
import {onAuthStateChanged } from "firebase/auth";

const firestore = getFirestore(app);

interface TicketsProps {
  // Props del componente
}

interface TicketData {
  passengerName: string;
  seatNumber: string;
  origin: string;
  destination: string;
  dateTravel: string;
  departureTime: string;
  arrivalTime: string;
  hours: string;
  datePurchase: string;
}

const Tickets: React.FC<TicketsProps> = () => {
  const [availableTicket, setAvailableTicket] = useState<TicketData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener el ID del usuario autenticado
        const userId = auth.currentUser?.uid;
        console.log("User Ref:", userId);

        // Verificar si el usuario está autenticado
        if (userId) {
          const ticketsRef = collection(firestore, "tickets");
          const queryy = query(ticketsRef, where("passengerName", "==", doc(firestore, `users/${userId}`)));
          const snapshot = await getDocs(queryy);
          const tickets: TicketData[] = await Promise.all(
            snapshot.docs.map(async (docSnapshot) => {
              const data = docSnapshot.data();

              // Obtener datos del usuario
              const userRef = doc(firestore, data.passengerName?.path || "");
              console.log("User Ref:", userRef);
              const userSnapshot = await getDoc(userRef);
              const userData = userSnapshot.data();

              // Obtener datos del asiento
              const seatRef = doc(firestore, data.seat?.path);
              const seatSnapshot = await getDoc(seatRef);
              const seatData = seatSnapshot.data();

              // Obtener datos de la referencia "idTravel"
              const travelRef = doc(firestore, data.idTravel?.path || "");
              const travelSnapshot = await getDoc(travelRef);
              const travelData = travelSnapshot.data();

              // Obtener datos de la referencia "idSchedule" en "travel"
              const scheduleRef = doc(firestore, travelData?.idSchedule?.path || "");
              const scheduleSnapshot = await getDoc(scheduleRef);
              const scheduleData = scheduleSnapshot.data();

              // Obtener datos de departureTime, arrivalTime y hours desde scheduleData
              const departureTime = scheduleData?.departureTime || "";
              const arrivalTime = scheduleData?.arrivalTime || "";
              const hours = scheduleData?.hours || "";

              return {
                passengerName: userData?.name || "",
                seatNumber: seatData?.seat || "",
                origin: travelData?.origin || "",
                destination: travelData?.destination || "",
                dateTravel: travelData?.dateTravel || "",
                departureTime,
                arrivalTime,
                hours,
                datePurchase: data.dateOfPurchase,
              };
            })
          );

          setAvailableTicket(tickets);
        }
      } catch (error) {
        console.log(error);
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      }
    });
  }, []);

  const handlePrintTicket = () => {
    window.print();
  };
  return (
    <div
      className="d-flex justify-content-between align-items-center flex-column"
      style={{ marginTop: "-50px", marginBottom: "20px" }}
    >
      {availableTicket.map((ticket: TicketData, index: number) => (
        <div
          className="card mt-5 text-center"
          key={index}
          style={{
            borderRadius: "10px",
            width: "100%",
            maxWidth: "900px",
            background: "#3C6E71",
            color: "white",
          }}
        >
          <div className="card-body mb-2" style={{ marginTop: "25px" }}>
            <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
            <h5 className="card-title mb-3">
              Nombre de pasajero: {ticket.passengerName}
            </h5>
            <h5 className="card-title mb-3">
              Número de Asiento: {ticket.seatNumber}
            </h5>
            <h5 className="card-subtitle mb-3">
              Origen y destino: {ticket.origin} - {ticket.destination}
            </h5>
            <h5 className="card-text mb-3">
              Fecha de salida: {ticket.dateTravel}
            </h5>
            <h5 className="card-text mb-3">
              Hora de salida: {ticket.departureTime}
            </h5>
            <h5 className="card-text mb-3">
              Hora de llegada: {ticket.arrivalTime}
            </h5>
            <h5 className="card-text mb-3">
              Duración del viaje: {ticket.hours}
            </h5>
            <h5 className="card-text">
              Fecha de compra: {ticket.datePurchase}
            </h5>
            <div style={{ marginTop: "25px" }}>
            <a className="btn-tickes" href="#" onClick={handlePrintTicket}>
              Imprimir
            </a>
              <a className="btn-tickes m-2" href="myTicketsQR">
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