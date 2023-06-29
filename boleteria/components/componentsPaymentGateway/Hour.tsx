import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";
import { app } from "../../src/fireBase/app";

const firestore = getFirestore(app);
const Hour = () => {
  const [hoursData, setHoursData] = useState<DocumentData[]>([]);

  useEffect(() => {
    // Realiza la consulta a Firebase para obtener los datos de la colección
    const fetchHoursData = async () => {
      const collectionRef = collection(firestore, "schedules");
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map(doc => doc.data());
      setHoursData(data);
    };

    fetchHoursData();
  }, []);

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
            <span className="cuadro-azul text-white mr-5">3</span>
            <span>Hora</span>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap">
            {hoursData.map((hour, index) => (
              <div
                className="cuadro-azul-grande text-white mb-3 mr-3"
                key={index}
                onClick={() => handleHourSelect(hour.departureTime)}
                role="button"
                tabIndex={0}
                style={{
                  backgroundColor: selectedHour === hour.departureTime ? '#3C6E71' : '#284B63',
                }}
              >
                <div className="servicio">Service {index + 1}</div>
                <hr></hr>
                <div className="hora">{hour.departureTime}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hour;
