import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
const Navbar1 = () => {
  return (
     <Navbar id='N1' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbar1