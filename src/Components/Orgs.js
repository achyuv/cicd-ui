import Card from 'react-bootstrap/Card';
import { Environment } from './Environment';
import ListGroup from 'react-bootstrap/ListGroup'
import { orgUpdateUrl } from '../Apis/Api';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Orgs({ org, planetId }) {

    const [orgState, setOrgState] = useState(org);
    console.log(org);

    const [form,setForm] = useState(false);

    const updateOrgForm = () => {

       

        setForm(!form);

        /* axios.put(getPlanetsUrl,org).then((response) => {
           const planets = response;
           setPlanets(planets.data);
     
         }).catch(error => console.log(error));*/




    }

    const updateOrgSubmit = async (e) => {

        e.preventDefault();

       

        //https://cors-anywhere.herokuapp.com

         await axios.put(orgUpdateUrl(planetId,orgState.id),orgState).then((response) => {
             console.log(response);
          
     
         }).catch(error => console.log(error));




    }




    return (
        <Card>
            {org && (<Card.Body>
                <Card.Title>Org ID: {orgState.id} <AiOutlineEdit onClick={updateOrgForm} /></Card.Title>


                {form && (<Form onSubmit={updateOrgSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Org Name</Form.Label>
                        <Form.Control type="text" defaultValue={orgState.orgName} onChange={(e)=>setOrgState({...orgState,orgName : e.target.value})}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Org Credentials</Form.Label>
                        <Form.Control type="text"  defaultValue={orgState.credential} onChange={(e)=>setOrgState({...orgState,credential : e.target.value})}/>
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Update Org
                    </Button>
                </Form>)}

               <ListGroup>
               {!form && (<><ListGroup.Item><b>Org Name</b> : {orgState.orgName}</ListGroup.Item>
                    <ListGroup.Item><b>Org Credential</b> : {orgState.credential}</ListGroup.Item></>)}
                    {orgState.env.map((environment) => <Environment env={environment} orgId={org.id} planetId={planetId}></Environment>)}

                </ListGroup>


            </Card.Body>)}
        </Card>

    );
}