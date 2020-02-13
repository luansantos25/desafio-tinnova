import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 

export default () => (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Tinnova</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
  </Navbar.Collapse>
</Navbar>
);