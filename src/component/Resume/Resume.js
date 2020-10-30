import React from 'react';
import { Button, Card } from 'react-bootstrap';

import resume from '../../images/resume.PNG'
import Footer from '../Footer/Footer';
const Resume = () => {
    return (
        <>
        <div >
           <a href='https://drive.google.com/file/d/1s5UZ0f0jdhm7Msia1wlDRKiYMMeWQiZj/view?usp=sharing' target='blank'> <Button className='btn btn-success w-100' variant='dark'>Download Resume</Button></a>
           <div className='my-2'>
               <Card.Img src={resume} alt="" srcset=""/>
                  
           </div>
        </div>
        <div style={{marginTop:'50px'}}>
      <Footer />  
      </div> 
        </>
    );
};

export default Resume;