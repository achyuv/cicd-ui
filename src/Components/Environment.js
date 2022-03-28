import  Accordion  from 'react-bootstrap/Accordion';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import {Vhosts} from './Vhosts'
import { AiOutlineEdit } from "react-icons/ai";

export function Environment({env,orgId,planetId}) {

    //const [env, setEnv] = useState();

 
    return (
    
  
      <Accordion >
    <Accordion.Item eventKey={env.id}>
      <Accordion.Header><b>Environment</b> : {env.name} <AiOutlineEdit /></Accordion.Header>
      <Accordion.Body>
      <Row>
      {env.vhost?.map((individualVhost)=> <Col sm={6}>  <Vhosts vhost={individualVhost} orgId={orgId} planetId={planetId} envId={env.id}></Vhosts></Col>)}
     
  
      
        </Row>
        {console.log(env.Vhosts)}
       
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>
    
  
    );
  }