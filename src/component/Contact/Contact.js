import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
      <>
  <section className='form justify-content-center align-items-center w-50 text-center ani-frm'>
  <h2 style={{color:'#fff'}}>Get in Touch</h2>

      <Form action="https://submit-form.com/mF0FK642" target="_self">
  <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Control type="text" name='name' placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Control type="email" name='email' placeholder="Your Email" />
  </Form.Group>   

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Control name='textarea' as="textarea" rows={3} />
  </Form.Group>
  <Button type='submit'  className='btn btn-success w-100' varianr='sucess'>Send</Button>
</Form>
  </section>
  <div style={{marginTop:'50px'}}>
      <Footer />  
      </div> 
      
  </>
    );
};

export default Contact;