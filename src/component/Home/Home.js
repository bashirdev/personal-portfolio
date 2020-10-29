import React from 'react';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import './Home.css';
import profile from '../../images/profile-pic.png'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Typical from 'react-typical';
import Common from '../Common/Common';
const Home = () => {
    return (
        <main className=''>
        <section className='mt-5 ' >
        <Row className='align-items-center '>
            <Col sm={12} md={6} className="mr-5">
            <h1>Hi, I am Bashir Ahammed </h1> 
            <Typical  steps={['Frontend web developer <> </>', 1000, 'And Graphic designer', 1000]}
        loop={Infinity}
        wrapper='p' />
             
              <p>I am a frontend web developer. I make mordern website with parfect pixcel <br/>
              and make user friendly, more interactive with animation
              !</p>
              <LinkContainer to='/about'>
              
              <Button type='button'  className='btn btn-success'>About Me</Button></LinkContainer>
            </Col>
            <Col  sm={12} md={6} lg={3} xl={3} >
            <div>
             <Image className='img'   style={{height:'50vh'}} src={profile} alt="" />
             </div>
            </Col>
        </Row>

     <div className='icon py-3'>
     <div>
         <Col>
            <Common />
         </Col>
     </div>
           
            </div>
        </section>
        </main>
    );
};

export default Home;