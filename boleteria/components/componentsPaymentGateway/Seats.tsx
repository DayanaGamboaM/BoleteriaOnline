import React from 'react'
const Seats = () => {
    return (
        <div className="container mt-5">
            <div className="card text-black " style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem' }} >
                <div className="card-header">
                    <div className="d-flex align-items-center mr-3">
                        <span className="cuadro-azul text-white mr-5">4</span>
                        <span >Asientos</span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title ">Selecciona tus asientos. Máximo 5</h5>
                    <button className="btn1">
                    <img src="https://cdn1.iconfinder.com/data/icons/smashicons-transport-outline-vol-2/60/79_-Car_Seat-_transport_vehicle-512.png" alt="Logo de asiento" className="mr-3" width={30}  />
                        Seleccionar espacios
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Seats;