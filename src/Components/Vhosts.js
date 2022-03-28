import Card from 'react-bootstrap/Card';
import {Environment} from './Environment';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineEdit } from "react-icons/ai";

export function Vhosts({vhost,planetId,orgId,envId}) {
    return (
        <Card>
  <Card.Body>
  <Card.Title><b>Vhost</b> :  {vhost.name} </Card.Title>
 
    <ListGroup>
  <ListGroup.Item><b>Cname</b> :  {vhost.cname}</ListGroup.Item>
 
  <ListGroup.Item><b>Port</b> :  {vhost.port}</ListGroup.Item>
  <ListGroup.Item><b>protocol</b> :  {vhost.protocol}</ListGroup.Item>

 
</ListGroup>
  
  </Card.Body>
</Card>
   
    );
  }