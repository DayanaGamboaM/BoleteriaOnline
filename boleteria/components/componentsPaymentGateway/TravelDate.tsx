import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TravelDate = () => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);

    return (
        <div className="container mt-5">
            <div className="card text-black" style={{ backgroundColor: '#D9D9D9', width: '35rem' }}>
                <div className="card-header">
                    <div className="d-flex align-items-center mr-3">
                        <span className="cuadro-azul mr-5">2</span>
                        <span>Fecha de tu viaje</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="calendar-container">
                        <DatePicker
                            selected={fechaSeleccionada}
                            onChange={(date: Date | null) => setFechaSeleccionada(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            placeholderText="Da click y selecciona la fecha"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelDate;