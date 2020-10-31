import React from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import profile from '../../images/profile-pic.png'
import Footer from '../Footer/Footer';

import './About.css'
const About = () => {
    return (
      <>
        <section className='container-lg'>
            <Row className='d-flex justify-content-sm-between align-items-center'>
               
                <Col  sm={12} md={6} lg={3} xl={3} className='justify-content-center text-center ani-abt-img ' >
            <div>
             <Image className='img'   style={{height:'50vh'}} src={profile} alt="" />
             </div>
             <div className='m-5'>
             <LinkContainer to='/project'>
                <Button className='items-skills w-100'>Project</Button></LinkContainer>
                </div>
             </Col>
              
              <Col className='ani-abt-skill' sm={12} md={6}>
                 
                 <div >
             <h1>I'm Bashir Ahammed</h1>
              <p>I am a frontend web developer. I make mordern website with perfect pixel <br/>
              and make user friendly, more interactive with animation
              !</p>
              
              </div>
              <div className='mt-5'>
              <h2>My Skills</h2>
                <ListGroup>
                <Row>
                
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>JavaScript</h5>
                    </ListGroup.Item>
                   
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>ES6</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>REACT.JS</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>HTML5</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>CSS3</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>BOOTSTRAP</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>EJS</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>NODE.JS</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>EXPRESS.JS</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>MONGODB</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>MONGOOSE</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>NPM</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>VS CODE</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>REST API</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>FIREBASE</h5>
                    </ListGroup.Item>
                    <ListGroup.Item  className='m-1 items-skills'>
                      <h5>GIT</h5>
                    </ListGroup.Item>
                    
                </Row>
                </ListGroup>
                </div>
                
              </Col>
            </Row>
            
        </section>
        <div style={{marginTop:'100px'}}>
      <Footer />  
      </div> 
        </>
    );
};

export default About;