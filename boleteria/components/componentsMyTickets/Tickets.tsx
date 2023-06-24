import React from "react";
import { Button } from "react-bootstrap";

const Tickets = () => {

  const availableTickets = [
    {
      hourI: "10:00 AM",
      Route: "CANOAS-SAN ISIDRO",
      Date: "05-04-2023",
      Precio: "5500",
    },
    {
      hourI: "01:30 PM",
      Route: "CANOAS-SAN JOSE",
      Date: "17-07-2023",
      Precio: "11500",
    },
    {
      hourI: "08:00 AM",
      Route: "SAN JOSE-CANOAS",
      Date: "15-02-2023",
      Precio: "11500",
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
            <h5 className="card-subtitle mb-3">{tick.Route}</h5>
            <h5 className="card-text mb-3">Fecha salida {tick.Date}</h5>
            <h5 className="card-text">Hora salida {tick.hourI}</h5>
            <h5 className="card-text">Precio: {tick.Precio}</h5>
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
