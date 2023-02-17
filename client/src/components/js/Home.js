import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContainerChat from "./ChatContainer";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ContainerChat />
    </div>
  );
};

export default Home;
