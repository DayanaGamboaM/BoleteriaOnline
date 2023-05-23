import React from "react";
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../QR-1.png"
import imagen2 from "../QR-2.jpg"
import imagen3 from "../QR-3.jpg"

const QR = () => {
  return (
    <div className="QrContainer">
      <div className="QRdataContainer"></div>
      <Carousel className="QrCarouselContainer" indicators = {false}>
        <Carousel.Item interval={100000}>
          <Image
            className="d-block w-100"
            src= {imagen1}
            alt="First slide"
            width={200}
            height={200}
          />
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <Image
            className="d-block w-100"
            src= {imagen2}
            alt="Second slide"
            width={200}
            height={200}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src= {imagen3}
            alt="Third slide"
            width={200}
            height={200}
          />
        </Carousel.Item>
      </Carousel>
      <div className="StateContainer"></div>
      <h5>Estado</h5>
    </div>
  );
};

export default QR;
