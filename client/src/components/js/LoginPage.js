import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>CHAT BOT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
          <Nav.Link>
            <Link to="/signup">Sign Up</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Login;
