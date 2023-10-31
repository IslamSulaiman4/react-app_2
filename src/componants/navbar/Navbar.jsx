import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route } from 'react-router-dom';


export default function customNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link to='/resturant' className='fw-semibold px-3'>Resturant</Link>
            <Link to='/products' className='fw-semibold px-3'>Products</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


  

