import Image from "next/image";
import React from "react";
import Banner from "../../public/bus-banner.jpg";
import UserProfile from "../../public/usuario.png";

const Hero = () => {
  return (
    <div className="container-account">
      <div className="banner">
        <div className="banner-image-container position-relative">
          <Image src={Banner} alt="Banner" className="img-fluid banner-image" />
          <div className="user-profile">
            <Image
              src={UserProfile}
              alt="user profile"
              className="user-image rounded-circle"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
