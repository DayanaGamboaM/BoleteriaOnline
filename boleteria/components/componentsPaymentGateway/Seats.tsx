import React, { useState } from 'react';

const Seats = () => {
    const [showSeats, setShowSeats] = useState(false);

    const showBoxSeating = () => {
        setShowSeats(true);
    };

    return (
        <div className="container mt-5">
            <div className="card text-black " style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem' }}>
                <div className="card-header">
                    <div className="d-flex align-items-center mr-3">
                        <span className="cuadro-azul text-white mr-5">4</span>
                        <span>Asientos</span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Selecciona tus asientos. Máximo 5</h5>
                    <button className="btn1" onClick={showBoxSeating}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/smashicons-transport-outline-vol-2/60/79_-Car_Seat-_transport_vehicle-512.png"
                            alt="Logo de asiento"
                            className="mr-3"
                            width={30}
                        />
                        Seleccionar espacios
                    </button>
                </div>
            </div>

            {showSeats && (
                <div className="cuadro-asientos mt-3" style={{maxWidth: '35rem'}}>
                <h3>Asientos Disponibles</h3>
                <div className="fila-asientos">
                  <button className="asiento">1</button>
                  <button className="asiento">2</button>
                  <div className="espacio"></div>
                  <button className="asiento">3</button>
                  <button className="asiento">4</button>
                </div>
                <div className="fila-asientos">
                  <button className="asiento">5</button>
                  <button className="asiento">6</button>
                  <div className="espacio"></div>
                  <button className="asiento">7</button>
                  <button className="asiento">8</button>
                </div>
                <button className="btn1" onClick={() => setShowSeats(false)}>
                  Cerrar
                </button>
              </div>
              
              
            )}
        </div>
    );
};

export default Seats;