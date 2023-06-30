import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LogoFooter from "/public/logo-footer.png";
import Image from "next/image";

const FooterInformation = () => {
  return (
    <footer className="text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#3c6e71", width: "100%" }}
      >
        <h4>ADMINISTRACIÓN</h4>
        <h5><i className="bi bi-geo-alt-fill text-black"></i> Dirección de la terminal Provincia Puntarenas, Corredores</h5>
        <h5><i className="bi bi-calendar3 text-black"></i> Horario de Lunes a Viernes de 8am a 5pm</h5>
        <h5><i className="bi bi-telephone-fill text-black"></i> 2562 6322</h5>

      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#d9d9d9", width: "100%" }}
      >
        <figure>
          <Image
            src={LogoFooter}
            alt="Header Image"
            placeholder="blur"
            className="img-fluid rounded"
            style={{ width: "350px", height: "100px" }}
          />
        </figure>
        <section className="mb-4">
          <li className="list-inline-item">
            <a href="#">
              <i className="bi bi-facebook icon-black"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="bi bi-github icon-black"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="bi bi-instagram icon-black"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="bi bi-linkedin icon-black"></i>
            </a>
          </li>
        </section>
      </div>
    </footer>
  );
};

export default FooterInformation;
