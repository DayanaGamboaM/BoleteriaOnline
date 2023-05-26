import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../public/QR-1.png";
import imagen2 from "../../public/QR-2.jpg";
import imagen3 from "../../public/QR-3.jpg";
import { Button } from "react-bootstrap";
import { useState } from "react";

const QR = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {

    const totalImages = 2;

    if (activeIndex < totalImages - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

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
                borderRadius: 20,
                marginRight: "80px", // Mover el botón hacia la izquierda
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
                borderRadius: 20,
                marginLeft: "80px"
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
                <Carousel.Item interval={1000000000}>
                  <div className="d-flex justify-content-center">
                    <Image
                      className="img-fluid"
                      src={imagen1}
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-flex justify-content-center">
                    <Image
                      className="img-fluid"
                      src={imagen2}
                      alt="Second slide"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="bg-white mx-auto"
              style={{ borderRadius: "20px", width: "28%", height: "auto" }}
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
