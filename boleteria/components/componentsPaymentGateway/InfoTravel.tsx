import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";
import Paypal from "/public/paypal.jpg";
import QR from '../componentsQR/QR';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from "../../src/fireBase/app";
import { getApp } from "firebase/app";

const firestore = getFirestore(app);

const InfoTravel = () => {
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [qrValue, setQRValue] = useState('');

  const generateRandomQRCode = async(getApp:any) => {
    const randomValue = Math.random().toString(36).substring(2, 15);
    setQRValue(randomValue);

    try {
      const docRef = await addDoc(collection(firestore, 'tickets'), { qrValue: randomValue });
      console.log('Documento guardado con ID:', docRef.id);
      console.log(qrValue);
    } catch (error) {
      console.error('Error al guardar el documento:', error);
    }
  };
  
  

  const handleClick = () => {
    generateRandomQRCode(qrValue);
  };
  
  // const onSuccess = (details: any, data: any) => {
  //   // Lógica a ejecutar cuando el pago es exitoso
  //   console.log("Pago realizado con éxito", details, data);
  //   setPaymentStatus("success");
  //   generateRandomQRCode
  // };

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
            </div>
            <hr></hr>
            <div>
              <h5>Hora de abordaje:</h5>
              <p>10:00 AM</p>
            </div>
            <div>
              <h5>Origen:</h5>
              <p>Ciudad A</p>
            </div>
            <div>
              <h5>Posible hora de llegada:</h5>
              <p>12:00 PM</p>
            </div>
            <div>
              <h5>Destino:</h5>
              <p>Ciudad B</p>
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
            <button onClick={handleClick}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTravel;