import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import my_logo from "../Images/aaa.png";

const NavBar = () => {
  const style = {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div style={style}>
      <Navbar expand="lg" bg="white" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={my_logo} alt="App Logo" height="80" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "180px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/about" className="fw-bold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/photos" className="fw-bold">
                Photos
              </Nav.Link>
              <Nav.Link as={Link} to="/videos" className="fw-bold">
                Videos
              </Nav.Link>
              <Nav.Link as={Link} to="/press" className="fw-bold">
                Press
              </Nav.Link>
              <Nav.Link as={Link} to="/arangetram" className="fw-bold">
                Arangetram
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews" className="fw-bold">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="fw-bold">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/awards" className="fw-bold">
               awards
              </Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
