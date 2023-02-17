import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>CHAT BOT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/signup">Sign Up</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
