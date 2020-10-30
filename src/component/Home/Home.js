import React from 'react';
import { Button, Card, Col,  Image,  Row } from 'react-bootstrap';
import './Home.css';

import profile from '../../images/profile-pic.png'

import { LinkContainer } from 'react-router-bootstrap';
import Typical from 'react-typical';
import Particles from 'react-particles-js';
import Footer from '../Footer/Footer';

const Home = () => {
    const myName='frontend web developer'
  
    return (
        <>
   
       
        <section  className='mt-5 home-sec' >
        <Row className='align-items-center '>
            <Col sm={12} md={6} className="mr-5 ">
            <div className='ani-mation'>
             <h1>Hi, I'm Bashir Ahammed</h1>
            <Typical  steps={[ `${myName}`, 1000, '', 1000]}
        loop={Infinity}
        wrapper='h4' />
             
              <p>I am a frontend web developer. I make mordern website with parfect pixcel <br/>
              and make user friendly, more interactive with animation
              !</p>
              <LinkContainer to='/about'>
              
              <Button type='button'  className='btn btn-success'>About Me</Button></LinkContainer>
              </div>
            </Col>
            <Col  sm={12} md={6} lg={3} xl={3} className="ani-mation-img" >
            <div>
             <Image className='img'   style={{height:'50vh'}} src={profile} alt="" />
             </div>
            </Col>
        </Row>
  
     
        </section>

        <Particles className='particles'
            params={{
	    "particles": {
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
     <div className='foot' style={{marginTop:'650px'}}>
      <Footer />  
      </div>  
        </>
    );
};

export default Home;