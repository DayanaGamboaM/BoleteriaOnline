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
import { onAuthStateChanged } from "firebase/auth";

const firestore = getFirestore(app);

interface TicketData {
  seatNumber: string;
  origin: string;
  destination: string;
  dateTravel: string;
  departureTime: string;
}

const Information = () => {

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

              return {
                seatNumber: seatData?.seat || "",
                origin: travelData?.origin || "",
                destination: travelData?.destination || "",
                dateTravel: travelData?.dateTravel || "",
                departureTime,
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

  return (
    <div className="d-flex justify-content-center align-items-center">
      {availableTicket.map((ticket: TicketData, index: number) => (
        <div
          className="card mt-5 text-center"
          style={{ borderRadius: "10px", width: "90%", maxWidth: "500px", marginBottom: '50px' }}
        >
          <div className="card-body">
            <h5 className="card-title">Autobus: {ticket.seatNumber}</h5>
            <h5 className="card-subtitle mb-2 ">Ruta: {ticket.origin} - {ticket.destination}</h5>
            <h5 className="card-text">Hora de salida: {ticket.departureTime}</h5>
            <h5 className="card-text">Fecha de salida: {ticket.dateTravel}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
