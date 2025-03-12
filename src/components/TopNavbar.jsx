'use client';

import { Navbar, Container, Image, NavDropdown, Nav } from 'react-bootstrap';
import { Facebook, Instagram } from 'react-bootstrap-icons';

const TopNavbar = () => (
  <Navbar bg="black" expand="lg" variant="dark" id="navbar">
    <Container fluid>
      <Navbar.Brand href="#">
        <Image src="./gyu-kaku-logo.png" alt="Gyu-Kaku logo" fluid id="bgSize" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
        <Nav id="navbar">
          <Nav.Link className="text-white yellow-hover" id="home-underline">HOME</Nav.Link>
          <Nav.Link className="text-white yellow-hover">LOCATIONS & MENU</Nav.Link>
          <Nav.Link className="text-white yellow-hover">RESERVATIONS</Nav.Link>
          <Nav.Link className="text-white yellow-hover">GIFT CARDS</Nav.Link>
          <Nav.Link className="text-white yellow-hover">REWARDS</Nav.Link>
          <Nav.Link className="text-white yellow-hover">CARRERS</Nav.Link>
          <NavDropdown title={<span className="text-white yellow-hover">FRANCHISE</span>}>
            <NavDropdown.Item>North America Opportunities</NavDropdown.Item>
            <NavDropdown.Item>Global Opportunities</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text-white yellow-hover">CONTACT</Nav.Link>
          <Nav.Link className="text-white yellow-hover">ORDER NOW</Nav.Link>
          <Nav.Link className="text-white yellow-hover"><Facebook /></Nav.Link>
          <Nav.Link className="text-white yellow-hover"><Instagram /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavbar;
