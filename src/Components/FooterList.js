import ListGroup from 'react-bootstrap/ListGroup';

function FooterList() {
  return (
 <div className="d-md-none d-md-block">
 <h3 className='mt-5' style={{paddingLeft: '10px'}}>Quick Links</h3>
 <ListGroup  horizontal style={{paddingLeft: '30px',paddingBottom:'10px'}}>
      <ListGroup.Item>Home</ListGroup.Item>
      <ListGroup.Item>Entertainment</ListGroup.Item>
      <ListGroup.Item>Technology</ListGroup.Item>
      <ListGroup.Item>World</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default FooterList;