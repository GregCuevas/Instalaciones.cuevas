import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../layout/Logo.png";

const navLinkStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginLeft: "60px", // Alinear a la derecha
  marginRight: "auto", // Ajustar el espacio a la derecha (menos margen)
  marginTop: "20px", // Ajustar la posición vertical
  color: "white",
};

const mobileLogoStyle = {
  marginLeft: "auto", // Alinear a la derecha en dispositivos móviles
  marginRight: "20px", // Dar espacio a la derecha en dispositivos móviles
};

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#001d3d" }}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              margin: "20px auto 0",
              display: "block",
              textAlign: "center",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              width="250"
              height="auto"
              className="logo"
              style={mobileLogoStyle} // Aplicar el estilo del logo para móviles
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Nav.Link as={Link} to="/Inicio" style={navLinkStyle}>
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#footer"
                onClick={(e) => {
                  e.preventDefault();
                  const footerElement = document.getElementById("footer");
                  if (footerElement) {
                    footerElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={navLinkStyle}
              >
                Acerca de Nosotros
              </Nav.Link>
              <Nav.Link
                href="#ctn"
                onClick={(e) => {
                  e.preventDefault();
                  const footerElement = document.getElementById("ctn");
                  if (footerElement) {
                    footerElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={navLinkStyle}
              >
                Contactos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavbarComponent;
