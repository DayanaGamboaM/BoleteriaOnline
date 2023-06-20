import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";
import Paypal from "/public/paypal.jpg";

const InfoTravel = () => {
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const onSuccess = (details: any, data: any) => {
    // Lógica a ejecutar cuando el pago es exitoso
    console.log("Pago realizado con éxito", details, data);
    setPaymentStatus("success");
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
              {/* <div
                className="form-check "
                style={{ marginRight: "80px", marginBottom: "10px" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="opcionPago"
                  id="pago"
                />

                <label className="form-check-label d-flex" htmlFor="pago">
                  <Image
                    src={Paypal}
                    alt="paypal"
                    className="mg-fluid rounded-circle mr-3"
                    width={35}
                  />
                  PayPal
                </label>
              </div> */}
              <PayPalButton
                amount={60.0}
                onSuccess={onSuccess}
                options={{
                  clientId: "AXtVLUWZ8_l5qbZoCt2IloZ3g1y9kD1N8O0JLZ9HUOpFTkPbAw6IZ63MmCGSle0HbkJByTQaWJx2OrdU",
                  currency: "USD",
                }}
                style={{ color: "blue", shape: "rect", label: "pay" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTravel;