import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar';

import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Resume from './component/Resume/Resume';
import Common from './component/Common/Common';
const App = () => {
  return (
    <Router>
     <Common  className='common' />
    <Navbar />
   
    <Container className='py-5 my-5'>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route  path='/about'>
      <About />
    </Route>
    <Route  path='/portfolio'>
      <Portfolio />
    </Route>
    <Route  path='/contact'>
      <Contact />
    </Route>
    <Route  path='/resume'>
      <Resume />
    </Route>
    </Container>
    
 
   </Router>
  );
};

export default App;