import React from "react";

import { Button } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../public/logo-footer.png";

const Header = () => {
  return (
    <div className="container">
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb-3 d-flex flex-row flex-wrap align-items-center justify-content-between" style={{width: '1400px' , maxWidth: '100%'}}>
            <div className="text-center mb-3 mb-md-0 ">
              <Image
                className="img-fluid"
                src={Logo}
                alt="Logo"
                width={200}
              />
            </div>
            
            <div className="text-md-left">
              <h5 className="mb-2">Empresa</h5>
              <h5 className="mb-2">UNA Transporte</h5>
            </div>
            <div className="text-md-right">
              {/* AQUI IBA EL BOTON VALIDAR, si quito el div se desacomoda*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
