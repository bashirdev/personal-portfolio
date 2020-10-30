import React from 'react';
import { Container } from 'react-bootstrap';

import './Footer.css';


const Footer = () => {
    return (
        <Container className='footer'>
       
        <footer className='text-center footer'>
           <p>Copyright &copy; Created by-bashir {new Date().getFullYear()}</p> 
        </footer>
        </Container>
    );
};

export default Footer;