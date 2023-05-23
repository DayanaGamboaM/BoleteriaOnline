import React from 'react'

const InfoTravel = () => {
    return (
        <div className="container mt-5">
      <div className="card text-black" style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem' }}>
        <div className="card-header">
          <div className="d-flex align-items-center mr-3">
            <span>Tu viaje</span>
          </div>
        </div>
        <div className="card-body">
          <div className="trip-info">
            <div className="trip-info-item">
              <h5>Fecha:</h5>
              <p>21 de mayo de 2023</p>
            </div>
            <div className="trip-info-item">
              <h5>Hora de abordaje:</h5>
              <p>10:00 AM</p>
            </div>
            <div className="trip-info-item">
              <h5>Destino:</h5>
              <p>Ciudad B</p>
            </div>
            <div className="trip-info-item">
              <h5>Posible hora de llegada:</h5>
              <p>12:00 PM</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    );
}
export default InfoTravel;