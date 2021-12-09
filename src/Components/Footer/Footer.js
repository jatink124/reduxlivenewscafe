import React from 'react'
import { Card,Container,Row,Col,ListGroup,Nav } from 'react-bootstrap';

import {Ftr} from './Footerstyle';
 const Footer = () => {
  
  return (
  
  <Ftr>   
      <div class="ftr">
            <Container class="contftr">
  <Row>
    <Col><ListGroup>
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/India">India</Nav.Link>
      <Nav.Link href="/World">World</Nav.Link>
      <Nav.Link href="/Technology">Technology</Nav.Link>
      <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
</ListGroup></Col>
    <Col>
    {/* <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> */}

</Col>
   
  </Row>
</Container>
        </div>
        </Ftr>
    )
}
export default Footer;