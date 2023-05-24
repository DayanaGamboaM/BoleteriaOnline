import React from "react";
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../../public/QR-1.png"
import imagen2 from "../../public/QR-2.jpg"
import imagen3 from "../../public/QR-3.jpg"

const QR = () => {
  return (
    <div className="QrContainer">
      <div className="QRdataContainer"></div>
      <Carousel className="QrCarouselContainer" indicators = {false}>
        <Carousel.Item interval={100000}>
          <Image
            className="Carouselimg1Container"
            src= {imagen1}
            alt="First slide"
            // width={200}
            // height={200}
          />
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <Image
            className="Carouselimg2Container"
            src= {imagen2}
            alt="Second slide"
            // width={200}
            // height={200}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="Carouselimg3Container"
            src= {imagen3}
            alt="Third slide"
            // width={200}
            // height={200}
          />
        </Carousel.Item>
      </Carousel>
      <div className="StateContainer"></div>
      <h5>Estado</h5>
    </div>
  );
};

export default QR;
