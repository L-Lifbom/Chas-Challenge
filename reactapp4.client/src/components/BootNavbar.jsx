import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BootNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to="/"><Nav.Link href="#action1" className='text-white'>Home</Nav.Link></Link>
            <Nav.Link href="#action2" className='text-white'>Link</Nav.Link>
            <Nav.Link href="#" disabled className='text-white'>Link</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Link to="login"><Button variant="outline-light">Log in</Button></Link>
            <Link to="login"><Button variant="outline-light" className="ms-2">Sign up</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootNavbar;

// {/* <Link to="/party"></Link> */}