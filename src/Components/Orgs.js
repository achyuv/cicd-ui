import Card from 'react-bootstrap/Card';
import {Environment} from './Environment';
import ListGroup from 'react-bootstrap/ListGroup'

export function Orgs() {
    return (
        <Card>
  <Card.Body>
  <Card.Title>Org Name ()</Card.Title>
 
    <ListGroup>
  <ListGroup.Item>Org Name : name here</ListGroup.Item>
  <ListGroup.Item>Org Creds : Creds Here</ListGroup.Item>
  <Environment></Environment>
 
</ListGroup>
  
  </Card.Body>
</Card>
   
    );
  }