import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import { app } from "../../src/fireBase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";

const firestore = getFirestore(app);

interface QRProps {
  qrValue: string;
  qr: string;
  passengerName: string;
  seatNumber: string; // Cambiar el tipo a string
  origin: string;
  destination: string;
  dateTravel: string;
  departureTime: string;
  arrivalTime: string;
  hours: string;
  datePurchase: string;
}

const QR: React.FC<QRProps> = ({ qrValue, qr }) => {
  const [availableQR, setAvailableQR] = useState<DocumentData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    const totalImages = availableQR.length;
    if (activeIndex < totalImages - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const availableQRCollection = collection(firestore, "dataTickets");
        const unsubscribe = onSnapshot(availableQRCollection, (snapshot) => {
          const qrs: DocumentData[] = snapshot.docs.map((docSnapshot) =>
            docSnapshot.data()
          );
          setAvailableQR(qrs);
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from the snapshot listener
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card col-lg-13" style={{ backgroundColor: "#3C6E71" }}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <Button
              variant="light"
              className="btn btn-costume"
              onClick={handlePrevClick}
              style={{
                background: "#D9D9D9",
                color: "black",
                borderRadius: "1em",
                marginRight: "80px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </Button>
            <Button
              variant="light"
              className="btn btn-costume"
              onClick={handleNextClick}
              style={{
                background: "#D9D9D9",
                color: "black",
                borderRadius: "1em",
                marginLeft: "80px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Button>
          </div>
          <div
            className="card bg-white mx-auto my-5"
            style={{ maxWidth: "300px", maxHeight: "250px" }}
          >
            <div className="card-body">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
              >
                {availableQR.map((ticket: DocumentData, index: number) => (
                  <Carousel.Item key={index} interval={1000000000}>
                    <div className="d-flex flex-column align-items-center">
                      <div className="d-flex justify-content-center">
                        <QRCode value={ticket.qr} size={220} />
                      </div>
                      {/* <p>{ticket.qr}</p>{" "} */}
                      {/* Pasajero: {ticket.passengerName},
                      Asiento: {ticket.seatNumber},
                      Origen: {ticket.origin},
                      Destino: {ticket.destination},
                      Fecha de viaje: {ticket.dateTravel},
                      Hora de llegada: {ticket.arrivalTime},
                      Hora de partida: {ticket.departureTime},
                      Hora de viaje: {ticket.hours},
                      Fecha de compra: {ticket.datePurchase}, */}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="bg-white mx-auto"
              style={{
                borderRadius: "1rem",
                padding: "10px",
                width: "200px",
                height: "45px",
              }}
            >
              <h5 className="text-center">Estado</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;