import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../public/QR-1.png";
import imagen2 from "../../public/QR-2.jpg";
import imagen3 from "../../public/QR-3.jpg";

const QR = () => {
  return (
    <div className="container">
      <div className="card col-lg-13" style={{ backgroundColor: "#3C6E71" }}>
        <div className="card-body">
          <div
            className="card bg-white mx-auto my-5"
            style={{ maxWidth: "300px", maxHeight: "250px" }}
          >
            <div className="card-body">
              <Carousel indicators={false}>
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
              style={{ borderRadius: "20px",width: "28%", height: 'auto'}}
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
