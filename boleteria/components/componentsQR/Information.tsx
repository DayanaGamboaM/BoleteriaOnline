import React, { useState, useEffect } from "react";
import { app } from "../../src/fireBase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";


interface TicketData {
  passengerName: string;
  seatNumber: string; // Cambiar el tipo a string
  origin: string;
  destination: string;
  dateTravel: string;
  departureTime: string;
  arrivalTime: string;
  hours: string;
  datePurchase: string;
}

const firestore = getFirestore(app);

const Information = () => {
  const [availableTicket, setAvailableTicket] = useState<TicketData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const avaibletickets = collection(firestore, "tickets");
        const snapshot = await getDocs(avaibletickets);
        const tickets: TicketData[] = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const data = docSnapshot.data();

            // Obtener datos del usuario
            const userRef = doc(firestore, data.passengerName?.path || "");
            const userSnapshot = await getDoc(userRef);
            const userData = userSnapshot.data();

            // Obtener datos del asiento
            const seatRef = doc(firestore, data.seat?.path);
            const seatSnapshot = await getDoc(seatRef);
            const seatData = seatSnapshot.data();

            // Obtener datos de la referencia "idTravel"
            const travelRef = data.idTravel?.path
              ? doc(firestore, data.idTravel.path)
              : null;
            const travelSnapshot = travelRef ? await getDoc(travelRef) : null;
            const travelData = travelSnapshot ? travelSnapshot.data() : null;


            // Obtener datos de idPurchaseDetail
            const totalRef = doc(firestore, data.idPurchaseDetail?.path || "");
            const totalSnapshot = await getDoc(totalRef);
            const totalData = totalSnapshot.data();
            console.log(seatData);
            // Asignar los datos al objeto del tiquete
            return {
              passengerName: userData?.name || "",
              seatNumber: seatData?.seat|| "",
              origin: travelData?.origin || "",
              destination: travelData?.destination || "",
              dateTravel: travelData?.dateTravel || "",
              departureTime: travelData?.departureTime || "",
              arrivalTime: travelData?.arrivalTime || "",
              hours: travelData?.hours || "",
              datePurchase: totalData?.totalAmount || "",
              
            };
          })
        );

        setAvailableTicket(tickets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {availableTicket.map((ticket: TicketData, index: number) => (
      <div
        className="card mt-5 text-center"
        key={index}
        style={{ borderRadius: "10px", width: "90%", maxWidth: "500px", marginBottom: '50px'}}
      >
        <div className="card-body">
          <h5 className="card-title">Autobus: 106</h5>
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
