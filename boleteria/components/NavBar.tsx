import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "/public/logo.png";
import Image from "next/image";
import User from "/public/user.png";

const NavBar = () => {
  return (
    <Navbar className="navBar" expand="sm" collapseOnSelect>
      <Navbar.Brand className="ml-5 p-2 fs-3" href="#home">
        <Image
          src={Logo}
          alt="Header Image"
          placeholder="blur"
          className="img-fluid rounded-circle"
          width={70}
          height={70}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link
            href="account"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3 "
          >
            Cuenta
          </Nav.Link>
          <Nav.Link
            href="myTickets"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            Mis tiquetes
          </Nav.Link>
          <Nav.Link
            href="routeCalendar"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            Calendario de Rutas
          </Nav.Link>
          <Nav.Link
            href="paymentGateway"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            Pagos
          </Nav.Link>
          <Nav.Link
            href="myTicketsQR"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            QR
          </Nav.Link>
        </Nav>
        <Nav className="container-right align-items-center text-center">
          <div className="d-flex flex-sm-row flex-column align-items-center text-center">
            <Image
              src={User}
              alt="User Icon"
              placeholder="blur"
              className="user-logo img-fluid rounded-circle"
              width={30}
              height={30}
            />
            <a className="username mr-3" style={{ color: "#ffffff" }}>
              Nombre de usuario
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
