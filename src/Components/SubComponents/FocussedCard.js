import React from 'react'
import { Container,Row,Col,ListGroup } from 'react-bootstrap';
import FC from './css/FC.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BootstrapTable from '../Test/BootstrapTable';
const handleDragStart = (e) => e.preventDefault();

const items = [
  <><div class="row"><div class="col hjj"><div class="row ghj"><div class="col-2">CSK</div>
                <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
                <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
                <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
                <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
              </div>
              
              <div class="col hjj"><div class="row ghj"><div class="col-2">CSK</div>
                <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
                <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
                <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
                <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
              </div>
            
              <div class="col hjj"><div class="row ghj"><div class="col-2">CSK</div>
                <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
                <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
                <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
                <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
              </div></div></>,
 <><div class="row"><div class="col"><div class="row ghj"><div class="col-2">CSK</div>
 <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
 <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
 <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
 <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
</div>

<div class="col"><div class="row ghj"><div class="col-2">CSK</div>
 <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
 <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
 <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
 <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
</div>

<div class="col"><div class="row ghj"><div class="col-2">CSK</div>
 <div class="col">Match 59 - 12 May 22</div><div class="col-2">MI</div></div>
 <div class="row"><div class="col-4"><img src="images/csk.png" style={{width:"100px",height:"50px"}}/></div>
 <div class="col-4"><button type="button" class="btn btn-primary btn-sm">completed</button></div>
 <div class="col-4"><img src="images/MI.jpg" style={{width:"100px",height:"50px"}}/></div></div>
</div></div></>,
 
];
function FocussedCard() {
  return (
<>
<div class="sfdc">
<Container>
  <Row>
    <Col><h2 class="headingipl">INDIAN PREMIER LEAGUE</h2></Col>
  </Row>
  <Row>
    <Col><img src="https://static.toiimg.com/photo/msid-91506610,width-
            300,resizemode-4,imgsize-57914/91506610.cms" style={{width:"400px",height:"200px"}} alt="Italian Trulli"
            class="imageop"/>
            <div class="centred">With Jadeja out, Mumbai Indians look to pack off Chennai Super Kings</div></Col>
    <Col><ul><li>CSK unfollow Ravindra Jadeja on Instagram amid rumours of rift</li><hr/>
                <li>CSK unfollow Ravindra Jadeja on Instagram amid rumours of rift</li><hr/>
                <li>CSK unfollow Ravindra Jadeja on Instagram amid rumours of rift</li><hr/>
                <li>CSK unfollow Ravindra Jadeja on Instagram amid rumours of rift</li></ul></Col>
    <Col></Col>
  </Row>

  <Row>
    {/* <Col><AliceCarousel mouseTracking disableDotsControls disableButtonsControls autoPlay  items={items} /></Col> */}
  </Row>
  <Row><Col><div class="container tbl">
    <div class="row">
     <div class="col-7">
 <BootstrapTable/>
 </div>
    </div>
  </div></Col></Row>
</Container></div>
</>
  )
}

export default FocussedCard