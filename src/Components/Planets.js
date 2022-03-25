import  Accordion  from 'react-bootstrap/Accordion';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';


import {Orgs} from './Orgs'

export function Planets() {
  return (
  

    <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>Planet Name: ()</Accordion.Header>
    <Accordion.Body>
    <Row>
    <Col sm={6}>  <Orgs></Orgs></Col>
    <Col sm={6}>  <Orgs></Orgs></Col>
    <Col sm={6}>  <Orgs></Orgs></Col>

    
      </Row>
     
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
  

  );
}

