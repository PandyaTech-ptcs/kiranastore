import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaLink, FaShopify, FaList, FaRegistered, FaBlog, FaSearch, FaShoppingBasket, FaCaretDown } from 'react-icons/fa';

const MenuComponent = () => {
  return (
    <div className="text-center">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><FaHome style={{ marginRight: '0.5rem' }}/>Home</Nav.Link>
            <Nav.Link href="#features"><FaLink style={{ marginRight: '0.5rem' }}/>Features</Nav.Link>
            <Nav.Link href="#products"><FaShopify style={{ marginRight: '0.5rem' }}/>Products</Nav.Link>
            <NavDropdown title={<span><FaList style={{ marginRight: '0.5rem' }}/>Categories</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#review"><FaRegistered style={{ marginRight: '0.5rem' }}/>Review</Nav.Link>
            <Nav.Link href="#blogs"><FaBlog style={{ marginRight: '0.5rem' }}/>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search"><FaSearch /></Nav.Link>
            <Nav.Link href="#basket"><FaShoppingBasket /></Nav.Link>
            <Nav.Link href="#dropdown"><FaCaretDown /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuComponent;
