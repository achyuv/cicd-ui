import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { getPlanetsUrl } from '../Apis/Api';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'


import { Orgs } from './Orgs'

export function Planets() {

  const [planets, setPlanets] = useState();

  useEffect(() => {

    getPlanetApi();

  }, [])

  const getPlanetApi = () => {

    axios.get(getPlanetsUrl).then((response) => {
      const planets = response;
      setPlanets(planets.data);

    }).catch(error => console.log(error));




  }




  return (
    <>
      {planets && planets.map((planet) => (




        <Accordion key={planet.planetId} >
          {console.log(planet)}


          <Accordion.Item eventKey="0" >
            <Accordion.Header>Planet ID : {planet.planetId}</Accordion.Header>
            <Accordion.Body>

              <ListGroup>
                <ListGroup.Item><b>Description</b> : {planet.planetDesc}</ListGroup.Item>
                <ListGroup.Item><b>Credentials</b> : {planet.credential}</ListGroup.Item>
                <ListGroup.Item><b>Management Server Location</b> : {planet.mgmtServerLocation}</ListGroup.Item>


              </ListGroup>
              <br />


             
              <Row>
                {planet.orgs.map((org)=>(<Col sm={6}>  <Orgs org={org} key={org.id}></Orgs></Col>))}
               


              </Row>

            </Accordion.Body>
          </Accordion.Item>

        </Accordion>))}
    </>


  );
}

