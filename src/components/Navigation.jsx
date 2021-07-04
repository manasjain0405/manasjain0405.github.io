import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

function Navigation() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <Image
            roundedCircle
            src={process.env.PUBLIC_URL + "/logo192.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="MJ"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigation;
