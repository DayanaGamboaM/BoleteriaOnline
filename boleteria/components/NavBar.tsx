import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "/public/logo.png";
import Image from "next/image";
import User from "/public/user.png";
import { auth } from "@/fireBase/app";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const NavBar = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getUserEmail = () => {
      if (auth.currentUser?.email) {
        const email = auth.currentUser.email;
        setUserEmail(email);
        localStorage.setItem("userEmail", email);
      }
    };

    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    } else {
      getUserEmail();
    }

    // Manejar el evento beforeunload para cerrar la sesión antes de que la página se cierre
    const handleBeforeUnload = () => {
      handleSignOut();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userEmail");
      router.push("/login");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };
  return (
    <Navbar className="navBar" expand="sm" collapseOnSelect>
      <Navbar.Brand className="ml-5 p-2 fs-3" href="home">
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
        <Nav className="ml-auto">
          <Nav.Link
            href="account"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
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
            href="myTicketsQR"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            QR
          </Nav.Link>
          <Nav.Link
            href="login"
            style={{ color: "#ffffff" }}
            className="fs-22 m-3"
          >
            Login
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
            <NavDropdown
              title={userEmail}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item onClick={handleSignOut}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

