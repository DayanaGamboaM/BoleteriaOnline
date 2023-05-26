import React from "react";
import { Button } from "react-bootstrap";

const Tickets = () => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-column">
      <div
        className="card mt-5 text-center"
        style={{
          borderRadius: "10px",
          width: "100%",
          maxWidth: "900px",
          background: "#3C6E71",
          color: "white",
        }}
      >
        <div className="card-body">
          <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
          <h5 className="card-subtitle mb-3">CANOAS-SAN JOSE</h5>
          <h5 className="card-text mb-3">Fecha salida 17-07-2023</h5>
          <h5 className="card-text">Hora salida 08:00 AM</h5>
          <h5 className="card-text">Precio: 11500</h5>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black",
            }}
          >
            Imprimir
          </Button>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black",
            }}
          >
            Tiquetes
          </Button>
        </div>
      </div>
      <div
        className="card mt-5 text-center"
        style={{
          borderRadius: "10px",
          width: "100%",
          maxWidth: "900px",
          background: "#3C6E71",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
          <h5 className="card-subtitle mb-3">SAN JOSE-CANOAS</h5>
          <h5 className="card-text mb-3">Fecha salida 20-07-2023</h5>
          <h5 className="card-text">Hora salida 05:00 AM</h5>
          <h5 className="card-text">Precio: 11500</h5>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black",
            }}
          >
            Imprimir
          </Button>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black",
            }}
          >
            Tiquetes
          </Button>
        </div>
      </div>
      <div
        className="card mt-5 text-center flex-wrap"
        style={{
          borderRadius: "10px",
          width: "100%",
          maxWidth: "900px",
          background: "#3C6E71",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title mb-3">UNA-TRANSPORTE UNA</h5>
          <h5 className="card-subtitle mb-3">CANOAS-SAN JOSE</h5>
          <h5 className="card-text mb-3">Fecha salida 01-12-2023</h5>
          <h5 className="card-text">Hora salida 10:00 AM</h5>
          <h5 className="card-text">Precio: 10500</h5>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black",
            }}
          >
            Imprimir
          </Button>
          <Button
            className="btn btn-costume"
            variant="ligth"
            style={{
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
              marginTop: "20px",
              marginRight: "10px",
              flex: "0 0 300px",
              maxWidth: "100%",
              borderRadius: 20,
              background: "#D9D9D9",
              color: "black"
            }}
          >
            Tiquetes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
