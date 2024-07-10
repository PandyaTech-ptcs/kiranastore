import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaLink, FaShopify, FaRegistered } from 'react-icons/fa';
import './App.css';

const MenuComponent = () => {
  return (
    <div className="text-center display-content">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><FaHome style={{ marginRight: '0.5rem' }}/>Home</Nav.Link>
            <Nav.Link href="#features"><FaLink style={{ marginRight: '0.5rem' }}/>Our Services</Nav.Link>
            <Nav.Link href="#products"><FaShopify style={{ marginRight: '0.5rem' }}/>About</Nav.Link>
            <Nav.Link href="#review"><FaRegistered style={{ marginRight: '0.5rem' }}/>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuComponent;
