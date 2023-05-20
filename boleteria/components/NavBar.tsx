import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "/public/logo.png";
import Image from "next/image";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Navbar.Brand className="ml-5 p-4 fs-3" href="#home">
          <Image
            src={Logo}
            alt="Header Image"
            placeholder="blur"
            className="img-fluid"
            width={70}
            height={70}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="account" className="fs-4 m-3">
              Cuenta
            </Nav.Link>
            <Nav.Link href="myTickets" className="fs-4 m-3">
              Mis tiquetes
            </Nav.Link>
            <Nav.Link href="routeCalendar" className="fs-4 m-3">
              Calendario de Rutas
            </Nav.Link>
            <Nav.Link href="paymentGateway" className="fs-4 m-3">
              Pagos
            </Nav.Link>
            <Nav.Link href="myTicketsQR" className="fs-4 m-3">
              QR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default NavBar;