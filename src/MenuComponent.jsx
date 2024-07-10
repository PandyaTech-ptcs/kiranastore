import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

const MenuComponent = () => {
  return (
    <div className="text-center">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="mr-3">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link href="#home" className="mr-0">Home</Nav.Link>
            <Nav.Link href="#features" className="mx-2">Our Services</Nav.Link>
            <Nav.Link href="#products" className="mx-2">About</Nav.Link>
            <Nav.Link href="#review" className="mx-2">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuComponent;
