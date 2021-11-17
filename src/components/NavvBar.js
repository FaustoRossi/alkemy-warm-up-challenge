import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logout from "../assets/logout.png";

function NavvBar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };
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
          <Button variant="danger" onClick={() => handleLogout()}>
            <Image src={logout} className="ml-4" />{" "}
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavvBar;
