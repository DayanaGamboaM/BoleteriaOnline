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
    // Aquí debes ajustar el número máximo de imágenes en el carrusel
    const totalImages = 2; // Por ejemplo, si tienes 2 imágenes

    if (activeIndex < totalImages - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="container">
      <div className="card col-lg-13" style={{ backgroundColor: "#3C6E71" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <Button className="btn btn-custom" onClick={handlePrevClick} style={{background: '#D9D9D9', color: 'Black', borderRadius: 20 }}>
              Back
            </Button>
            <Button className="btn btn-custom" onClick={handleNextClick} style={{background: '#D9D9D9', color: 'Black', borderRadius: 20}}>
              Next
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
