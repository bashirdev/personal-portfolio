import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
  <section className='form justify-content-center align-items-center w-50 text-center'>
  <h2 style={{color:'#fff'}}>Get in Touch</h2>
      <Form className=''>
  <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Control type="email" placeholder="Your Email" />
  </Form.Group>   

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button type='submit'  className='btn btn-success w-100' varianr='sucess'>Send</Button>
</Form>
  </section>
    );
};

export default Contact;