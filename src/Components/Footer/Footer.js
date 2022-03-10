import React from 'react'
import { Card,Container,Row,Col,ListGroup,Nav } from 'react-bootstrap';
import Navigation from '../Navbar';

import {Ftr} from './Footerstyle';
 const Footer = () => {
  
  return (
  
  <Ftr>   
      <div class="ftr">
            <Container class="contftr">
  <Row>
    {/* <Col><ListGroup>
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/India">India</Nav.Link>
      <Nav.Link href="/World">World</Nav.Link>
      <Nav.Link href="/Technology">Technology</Nav.Link>
      <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
</ListGroup></Col> */}
  
   <Col><Navigation/></Col>
  </Row>
</Container>
        </div>
        </Ftr>
    )
}
export default Footer;