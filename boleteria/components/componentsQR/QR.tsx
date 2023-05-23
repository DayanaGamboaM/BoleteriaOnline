import React from "react";
import Image from "next/image";
import QRlogo from "../QR-1.png"

const QR = () => {
  return (
    <div className="QrContainer">
      <div className="QRdataContainer"></div>
      <Image className='QRLogoContainer' src={QRlogo} alt="Logo" width={200} height={200}/>
      <div className="StateContainer"></div>
      <h5>Estado</h5>
    </div>
  );
};

export default QR;
