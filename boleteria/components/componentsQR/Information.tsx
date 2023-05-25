import React from "react";

const Information = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="card mt-5 text-center" style={{borderRadius: '10px', width: '90%', maxWidth: '500px'}}>
      <div className="card-body">
        <h5 className="card-title">Autobus: 106</h5>
        <h5 className="card-subtitle mb-2 ">
          Ruta: PASO CANOAS-SAN JOSE
        </h5>
        <h5 className="card-text">Hora de salida: 08:00 AM</h5>
        <h5 className="card-text">Fecha de salida: 17-07-2023</h5>
      </div>
    </div>
  </div>
  );
};

export default Information;
