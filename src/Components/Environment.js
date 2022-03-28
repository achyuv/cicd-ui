import  Accordion  from 'react-bootstrap/Accordion';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import {Vhosts} from './Vhosts'

export function Environment({env}) {

    //const [env, setEnv] = useState();

 
    return (
    
  
      <Accordion >
    <Accordion.Item eventKey={env.id}>
      <Accordion.Header><b>Environment</b> : {env.name}</Accordion.Header>
      <Accordion.Body>
      <Row>
      {env.vhost?.map((individualVhost)=> <Col sm={6}>  <Vhosts vhost={individualVhost}></Vhosts></Col>)}
     
  
      
        </Row>
        {console.log(env.Vhosts)}
       
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>
    
  
    );
  }