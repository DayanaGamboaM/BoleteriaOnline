import React from "react";
import { Button } from "react-bootstrap";

const Tickets = () => {

  const availableTickets = [
    {
      passengerName: "Andrey",
      seatNumber: 5,
      origin: "San Isidro",
      destination: "Ciudad Neily",
      dateTravel: "2023-04-23",
      departureTime: "10:00 AM",
      arrivalTime: "02:00 PM",
      datePurchase: "2023-03-22",
      totalAmount: "6000",
    },
    {
      passengerName: "Andrey",
      seatNumber: 5,
      origin: "Canoas",
      destination: "San Jose",
      dateTravel: "2023-06-2",
      departureTime: "06:00 AM",
      arrivalTime: "01:00 PM",
      datePurchase: "2023-05-28",
      totalAmount: "10500",
    },
    {
      passengerName: "Andrey",
      seatNumber: 5,
      origin: "San Jose",
      destination: "Canoas",
      dateTravel: "2023-01-18",
      departureTime: "08:00 AM",
      arrivalTime: "03:00 PM",
      datePurchase: "2023-01-15",
      totalAmount: "10500",
    },
  ];

  return (
    <div
      className="d-flex justify-content-between align-items-center flex-column"
      style={{ marginTop: "-50px", marginBottom: '20px'}}
    >
      {availableTickets.map((tick, index) => (
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
