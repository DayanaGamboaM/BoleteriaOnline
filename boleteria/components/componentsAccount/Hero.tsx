import React from "react";
import Image from "next/image";
import Banner from "../../public/bus-banner.jpg";
import UserProfile from "../../public/usuario.png";

const Hero = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Image className="imgCont img-fluid" src={Banner} alt="Banner" />
      </div>
      <div className="container">
        <div className="card-section">
          <div className="container">
            <div
              className="card-block bg-white mb-3 d-flex flex-row flex-wrap align-items-center justify-content-between"
              style={{ width: "1400px", maxWidth: "100%" }}
            >
              <div className="text-center mb-3 mb-md-0 mx-auto ">
                <Image
                  className="img-fluid"
                  src={UserProfile}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
