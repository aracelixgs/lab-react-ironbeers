import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <nav>
    <Navbar bg="primary" variant="dark">
      <Nav.Link href="/">Home</Nav.Link>
    </Navbar>
    </nav>
  );
}

export default Navbars;
