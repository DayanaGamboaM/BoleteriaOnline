import React from 'react';
import Image from "next/image";
import Logo from "../../public/Logo-bus.jpg";
import { isLeftHandSideExpression } from 'typescript';

const Hero = () => {
  return (
    <div className="container">
      <div className="page-header">
        <div className="card-section d-flex justify-content-center">
          <div className="container">
            <div className="card-block bg-white d-flex flex-wrap justify-content-center" style={{ maxWidth: '100%', borderRadius: 20 }}>
              <div className='card-State mb-3' style={{marginLeft: '20px',  marginRight: '20px', background: '#D9D9D9', flex: '0 0 400px', maxWidth: '100%' }}>
                {/* Contenido de la primera carta */}
              </div>
              <div className='card-State mb-3 ml-2 ' style={{marginLeft: '20px', marginRight: '20px', background: '#D9D9D9', flex: '0 0 400px', maxWidth: '100%' }}>
                {/* Contenido de la segunda carta */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
