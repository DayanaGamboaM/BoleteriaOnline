import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import firebase from "firebase/app";
import "firebase/firestore";
import Image from "next/image";
import Paypal from "/public/paypal.jpg";

import { getDocs, collection, query, where } from "firebase/firestore";
import { app, firestore } from "../../src/fireBase/app";

interface InfoTravelProps {
  origin?: string;
  destination?: string;
  selectedHour?: string | null;
}

const InfoTravel: React.FC<InfoTravelProps> = ({
  origin: originProp,
  destination: destinationProp,
  selectedHour,
}) => {
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const onSuccess = (details: any, data: any) => {
    console.log("Pago realizado con éxito", details, data);
    setPaymentStatus("success");
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

  const handleNextClick = () => {
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
