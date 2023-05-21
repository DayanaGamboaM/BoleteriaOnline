import React, { useState } from 'react';
const availableHours = [
    { hours: '10:00', service: 'Servicio 1' },
    { hours: '12:00', service: 'Servicio 2' },
    { hours: '03:00', service: 'Servicio 3' },
    { hours: '05:00', service: 'Servicio 4' },
];

const Hour = () => {
    const [selectedHour, setSelectedHour] = useState<string | null>(null);

    const handleHourSelect = (hour: string) => {
      if (selectedHour === hour) {
        setSelectedHour(null); // Deseleccionar la hora si ya estaba seleccionada
      } else {
        setSelectedHour(hour); // Seleccionar la hora si no estaba seleccionada previamente
      }
    };
  
    return (
        <div className="container mt-5">
        <div className="card text-black" style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem' }}>
          <div className="card-header">
            <div className="d-flex align-items-center mr-3">
              <span className="cuadro-azul mr-5">3</span>
              <span>Hora</span>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex flex-wrap">
              {availableHours.map((hour, index) => (
                <div
                  className="cuadro-azul-grande mb-3 mr-3"
                  key={index}
                  onClick={() => handleHourSelect(hour.hours)}
                  role="button"
                  tabIndex={0}
                  style={{
                    backgroundColor: selectedHour === hour.hours ? '#FFFFFF' : '#284B63',
                  }}
                >
                  <div className="servicio">{hour.service}</div>
                  <hr />
                  <div className="hora">{hour.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Hour;