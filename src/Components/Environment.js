import  Accordion  from 'react-bootstrap/Accordion';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import {Vhosts} from './Vhosts'

export function Environment() {
    return (
    
  
      <Accordion >
    <Accordion.Item eventKey="0">
      <Accordion.Header>Environment Name: ()</Accordion.Header>
      <Accordion.Body>
      <Row>
      <Col sm={6}>  <Vhosts></Vhosts></Col>
      <Col sm={6}>  <Vhosts></Vhosts></Col>
      <Col sm={6}>  <Vhosts></Vhosts></Col>
  
      
        </Row>
       
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>
    
  
    );
  }