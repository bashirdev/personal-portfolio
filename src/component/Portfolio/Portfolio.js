import React from 'react';
import Creative from '../../images/creative-agency.PNG'
import Volunteer from '../../images/volunteer-network.PNG'
import Travel from '../../images/travel-guru.PNG'
import { Button, Card,   Row } from 'react-bootstrap';

import Slider from "react-slick";
import './Portfolio.css'

import CarouselItemPreview from '../CarouselItemPreview/CarouselItemPreview';
import Footer from '../Footer/Footer';

const Portfolio = () => {
//     const setting ={
//         dots:true,
//     slidesToShow:3,
//     slidesToScroll:3,
//     centerMode: true,
//     autoplay:true,
//    autoplaySpeed:3000
//     }


// dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplaySpeed:3000,
//     autoplay:true,



 const settings = {
     dots:true,
    slidesToShow:3,
   slidesToScroll:3,
   centerMode: true,
   autoplay:true,
  autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
    return (
        <>
        <div className='profile-bg' variant='dark'>
        <section className=''>
        <div className="text-center mt-2 mb-5">
            <h2>Full Stact Web site</h2>
        </div>
           <Row className='text-center m-2 justify-content-center '>
           <Card className='m-2 ani-abt-img' style={{ width: '18rem' }}>
       <Card.Img variant="top" src={Creative} />
       <Card.Body>
       <Card.Title>Creative Agency</Card.Title>
    <Card.Text>
     <p> Creative Agency providing services , Customer can place
          Order a  service. Admin can add new services.
          User Role Management system (Admin and User)
    </p>
    </Card.Text>
    <Row className='justify-content-center mt-3'>
    <Card className='m-2'>
    <a href='https://github.com/bashirdev/creative-agency-assignment-11.git' target='blank'>
    <Button><i className='fab fa-github'></i></Button>
    </a>
    </Card>
    <Card className='m-2'>
    <a href='https://creative-agency-2106f.web.app/' target='blank'>
    <Button><i className='fas fa-globe'></i></Button>
    </a>
    </Card>
    </Row>
     </Card.Body>
    </Card>

    <Card className='m-2 ani-abt-skill ' style={{ width: '18rem' }}>
       <Card.Img variant="top" src={Volunteer} alt=''/>
       <Card.Body>
       <Card.Title>Volunteer Network</Card.Title>
    <Card.Text>
     <p>It’s a full-stack responsive web application,People can   select and register volunteer task</p>
    </Card.Text>
    <Row className='justify-content-center mt-3'>
    <Card className='m-2'>
    <a href='https://github.com/bashirdev/volunteer-assignment-10.git' target='blank'>
    <Button><i className='fab fa-github'></i></Button>
    </a>
    </Card>
    <Card className='m-2'>
    <a href='https://volunteer-network-4b68b.web.app' target='blank'>
    <Button><i className='fas fa-globe'></i></Button>
    </a>
    </Card>
    </Row>
  </Card.Body>
</Card>
  <Card className='m-2 ani-abt-img' style={{ width: '18rem' }}>
       <Card.Img variant="top" src={Travel} alt=''/>
       <Card.Body>
       <Card.Title>Travel Guru</Card.Title>
    <Card.Text>
     <p> It’s a hotel booking web application, user friendly.
       People can book his/her favorite places.
    </p>
    </Card.Text>
    <Row className='justify-content-center mt-3'>
    <Card className='m-2'>
    <a href='https://github.com/bashirdev/travel-guru-assignment-9.git' target='blank'>
    <Button><i className='fab fa-github'></i></Button>
    </a>
    </Card>
    <Card className='m-2'>
    <a href='https://travel-guru-ecc4f.web.app' target='blank'>
    <Button><i className='fas fa-globe'></i></Button>
    </a>
    </Card>
    </Row>
  </Card.Body>
</Card>
        
</Row>

 </section>
 {/* Slider section */}
 <section className='container-fluid mt-5'>
 <div className='text-center mt-3 mb-5'>
     <h3> More frontend website </h3>
 </div>
 <Slider className='mt-3 py-3 container-fluid '  {...settings} >
     
         {
            CarouselItemPreview.map(item =>(
                <Row  className=' container w-100  row'>
                <Card className='text-center'   >
                   <Card.Img  className='img-fluid card-carousel ' src={item.img} alt=''  style={{height:'20vh'}} />
                   <h4 className='py-3'>{item.name}</h4>
                </Card>
                </Row>
                 
            ))
         }
    
     </Slider>
 </section>
 </div>

 <div style={{marginTop:'50px'}}>
      <Footer />  
      </div> 
 </>
    );
};

export default Portfolio;