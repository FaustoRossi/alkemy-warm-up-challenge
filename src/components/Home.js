import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Catnip Inc.™</Navbar.Brand>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="mx-2">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link to="/postcreate" className="nav-link">
                Create a Post
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
