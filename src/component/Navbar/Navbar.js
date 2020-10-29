import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navber.css';

const Navber = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" fixed='top'  collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand className='cus-nav'>Bashir Ahammed</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <LinkContainer to='/'>
            <Nav.Link   className='mr-3 cus-nav'>Home</Nav.Link>
            </LinkContainer>
          <LinkContainer to='/about'>
            <Nav.Link   className='mr-3 cus-nav'>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio"> 
            <Nav.Link  className='mr-3 cus-nav'>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link  className='mr-3 cus-nav'>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
            <Nav.Link  className='mr-3 cus-nav'>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/resume'>
            <Nav.Link  className='mr-3 cus-nav'>
            <Button className='btn btn-success' varianr='sucess'> Resume </Button>
            
            </Nav.Link>
            </LinkContainer>
           
        </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;