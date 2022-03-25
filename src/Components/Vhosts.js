import Card from 'react-bootstrap/Card';
import {Environment} from './Environment';
import ListGroup from 'react-bootstrap/ListGroup'

export function Vhosts() {
    return (
        <Card>
  <Card.Body>
  <Card.Title>Vhost Name ()</Card.Title>
 
    <ListGroup>
  <ListGroup.Item>Cname : name here</ListGroup.Item>
  <ListGroup.Item>envName : Creds Here</ListGroup.Item>
  <ListGroup.Item>Name : name here</ListGroup.Item>
  <ListGroup.Item>Port : Creds Here</ListGroup.Item>
  <ListGroup.Item>Protocol : Creds Here</ListGroup.Item>

 
</ListGroup>
  
  </Card.Body>
</Card>
   
    );
  }