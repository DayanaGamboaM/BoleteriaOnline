import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import firebase from "firebase/app";
import "firebase/firestore";
import Image from "next/image";
import Paypal from "/public/paypal.jpg";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import {
  getDocs,
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
  getDoc,
  doc,
} from "firebase/firestore";
import { getAuth, User } from "firebase/auth";
import { app, firestore } from "../../src/fireBase/app";
import { updateDoc, setDoc } from "firebase/firestore";

interface InfoTravelProps {
  origin?: string;
  destination?: string;
  selectedHour?: string | null;
  qrValue?: string;
}

const InfoTravel: React.FC<InfoTravelProps> = ({
  origin: originProp,
  destination: destinationProp,
  selectedHour,
}) => {
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [randomQR, setQRValue] = useState("");

  const generateRandomQRCode = async (getApp: any) => {
    const randomValue = Math.random().toString(36).substring(2, 15);
    setQRValue(randomValue);
  };

  const onSuccess = (details: any, data: any) => {
    //Lógica a ejecutar cuando el pago es exitoso
    console.log("Pago realizado con éxito", details, data);
    setPaymentStatus("success");
    generateRandomQRCode;
  };

  const [origin, setOrigin] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [arrivalTime, setArrivalTime] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageOrigin = localStorage.getItem("routeOrigin");
      const localStorageDestination = localStorage.getItem("routeDestination");
      setOrigin(localStorageOrigin);
      setDestination(localStorageDestination);

      if (selectedHour) {
        // Consultar el documento correspondiente a la hora seleccionada
        const q = query(
          collection(firestore, "schedules"),
          where("departureTime", "==", selectedHour)
        );

        getDocs(q)
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              const doc = querySnapshot.docs[0];
              const arrivalTime = doc.get("arrivalTime");
              setArrivalTime(arrivalTime);
            }
          })
          .catch((error) => {
            console.log("Error al consultar la hora de llegada", error);
          });
      } else {
        setArrivalTime(null);
      }
    }
  }, [selectedHour]);

  const getUserData = async () => {
    try {
      const auth = getAuth();
      const currentUser: User | null = auth.currentUser;

      if (currentUser) {
        const userRef = doc(firestore, "users", currentUser.uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();

        if (userData) {
          const { displayName } = userData;
          console.log("Nombre de usuario:", displayName);
        }
      }
    } catch (error) {
      console.log("Error al obtener los datos del usuario:", error);
    }
  };

  const handleNextClick = async () => {
    try {
      // Crear un nuevo documento en la colección 'travels'
      const originValue = origin;
      const destinationValue = destination;
      const currentDate = new Date();
      const dateTravel = currentDate.toISOString().split("T")[0]; // Obtener solo la parte de la fecha
      const travelDocRef = await addDoc(collection(firestore, "travels"), {
        dateTravel: dateTravel,
        destination: destinationValue,
        origin: originValue,
      });

      console.log("Documento de viaje creado con ID:", travelDocRef.id);
      
      // Obtener el UID del usuario actual
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        console.log("UID del usuario:", uid);

        // Crear una referencia al documento de usuario
        const userRef = doc(firestore, `users/${uid}`);

        // Consultar el documento de horario correspondiente a la hora seleccionada
        const schedulesQuery = query(
          collection(firestore, "schedules"),
          where("departureTime", "==", selectedHour)
        );
        const schedulesSnapshot = await getDocs(schedulesQuery);

        let idSchedule = null;
        if (!schedulesSnapshot.empty) {
          const scheduleDoc = schedulesSnapshot.docs[0];
          idSchedule = scheduleDoc.id;
        }

        // Crear una referencia al documento de viaje
        const travelRef = doc(firestore, `travels/${travelDocRef.id}`);

        // Actualizar el campo idSchedule del documento de viaje
        await setDoc(
          travelRef,
          { idSchedule: doc(firestore, `schedules/${idSchedule}`) },
          { merge: true }
        );

        // Obtener un documento aleatorio de la colección "seating"
        const seatingQuery = query(collection(firestore, "seating"));
        const seatingSnapshot = await getDocs(seatingQuery);

        let seatingId = null;
        if (!seatingSnapshot.empty) {
          const seatingDocs = seatingSnapshot.docs;
          const randomIndex = Math.floor(Math.random() * seatingDocs.length);
          const randomSeatingDoc = seatingDocs[randomIndex];
          seatingId = randomSeatingDoc.id;
        }

        // Obtener solo la fecha actual para dateOfPurchase
        const currentDateOfPurchase = new Date();
        const dateOfPurchase = currentDateOfPurchase.toISOString().slice(0, 10); // Obtener los primeros 10 caracteres (yyyy-mm-dd)

        // Obtener un documento aleatorio de la colección "purchaseDetails"
        const purchaseDetailsQuery = query(
          collection(firestore, "purchaseDetails")
        );
        const purchaseDetailsSnapshot = await getDocs(purchaseDetailsQuery);

        let purchaseDetailId = null;
        if (!purchaseDetailsSnapshot.empty) {
          const purchaseDetailDocs = purchaseDetailsSnapshot.docs;
          const randomIndex = Math.floor(
            Math.random() * purchaseDetailDocs.length
          );
          const randomPurchaseDetailDoc = purchaseDetailDocs[randomIndex];
          purchaseDetailId = randomPurchaseDetailDoc.id;
        }
        const randomQRCode = generateRandomQRCode(app);
        console.log(randomQR);
        // Crear un nuevo documento en la colección 'tickets' con las referencias
        const ticketDocRef = await addDoc(collection(firestore, "tickets"), {
          dateOfPurchase: dateOfPurchase,
          idTravel: travelRef,
          passengerName: doc(firestore, `users/${uid}`),
          seat: doc(firestore, `seating/${seatingId}`),
          idPurchaseDetail: doc(firestore,`purchaseDetails/${purchaseDetailId}`),

          qrValue: randomQR,
          
        });
        Swal.fire(
          "¡Éxito!",
          "Tu compra se realizó correctamente",
          "success"
        ).then(() => {
          window.location.href = "home";
        });
        console.log("Documento de boleto creado con ID:", ticketDocRef.id);
      } else {
        console.log("No se encontró un usuario autenticado");
      }
    } catch (error) {
      console.log("Error al crear los documentos:", error);
    }

    console.log("Siguiente");
  };
  return (
    <div className="container mt-5">
      <div
        className="card text-black"
        style={{ backgroundColor: "#D9D9D9", maxWidth: "35rem" }}
      >
        <div className="card-header">
          <div className="d-flex align-items-center mr-3">
            <span>Tu viaje</span>
          </div>
        </div>
        <div className="card-body">
          <div
            className="trip-info bg-white"
            style={{ padding: "20px", borderRadius: "10px" }}
          >
            <div>
              <h5>Fecha</h5>
              <p>AquiFecha</p>
            </div>
            <hr />
            <div>
              <h5>Hora de abordaje:</h5>
              <p>{selectedHour}</p>
            </div>
            <div>
              <h5>Origen:</h5>
              <p>{origin}</p>
            </div>
            <div>
              <h5>Posible hora de llegada:</h5>
              <p>{arrivalTime}</p>
            </div>
            <div>
              <h5>Destino:</h5>
              <p>{destination}</p>
            </div>
          </div>

          <div
            className="bg-white"
            style={{
              padding: "20px",
              borderRadius: "10px",
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5>Datos para pago</h5>
              <div>
                <h5>Tarifa:</h5>
                <p style={{ textDecoration: "underline" }}>$50.00</p>
              </div>
              <div>
                <h5>Tarifa IVA:</h5>
                <p style={{ textDecoration: "underline" }}>$10.00</p>
              </div>
              <div>
                <h5>Tarifa con IVA incluido:</h5>
                <p style={{ textDecoration: "underline" }}>$60.00</p>
              </div>
            </div>
            <div>
              <PayPalButton
                amount={60.0}
                onSuccess={onSuccess}
                options={{
                  clientId:
                    "AXtVLUWZ8_l5qbZoCt2IloZ3g1y9kD1N8O0JLZ9HUOpFTkPbAw6IZ63MmCGSle0HbkJByTQaWJx2OrdU",
                  currency: "USD",
                }}
                style={{ color: "blue", shape: "rect", label: "pay" }}
              />
            </div>
            <button className="btn-tickes" onClick={handleNextClick}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTravel;
