import React from 'react';
import { Card, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <section>
                <Row  md={6} sm={12} lg={3} xl={4} className='m-5 justify-content-xl-center'>
                    <Card   className='text-center p-3 m-2'>
                        <h2>JavaScript</h2>
                        <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes</p>
                    </Card>
                    <Card  className='text-center p-3 m-2'>
                        <h2>About ES6</h2>
                        <p>ECMAScript (or ES) is a general-purpose programming language, standardized by Ecma International according to the document ECMA-262. It is a JavaScript standard meant to ensure the interoperability of Web pages ... The 6th edition, initially known as ECMAScript 6 (ES6) then and later renamed to ECMAScript 2015</p>
                    </Card>
                    <Card  className='text-center p-3 m-2'>
                        <h2>About React</h2>
                        <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                    </Card>
                    <Card   className='text-center p-3 m-2'>
                        <h2>About DOM</h2>
                        <p>The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. In this guide, we'll briefly introduce the DOM. We'll look at how the DOM represents an HTML or XML document in memory and how you use APIs to create web content and applications</p>
                    </Card>
                    <Card  className='text-center p-3 m-2'>
                        <h2>About OOP</h2>
                        <p>JavaScript Prototype. Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications. We call these self-contained pieces of code objects, better known as Classes in most OOP programming languages and Functions in JavaScript.</p>
                    </Card>
                    <Card  className='text-center p-3 m-2'>
                        <h2>About NODE.js</h2>
                        <p>Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. ... js is an open source, cross-platform runtime environment for developing server-side and networking applications.</p>
                    </Card>
                </Row>

            </section>
            <div style={{marginTop:'50px'}}>
      <Footer />  
      </div> 
        </div>
    );
};

export default Blog;