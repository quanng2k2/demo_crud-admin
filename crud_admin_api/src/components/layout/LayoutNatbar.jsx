import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function LayoutNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </Nav>
            <div className="d-flex">
              <Link to={"/user/add"}>
                <Button variant="outline-success">Add User</Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LayoutNavbar;
