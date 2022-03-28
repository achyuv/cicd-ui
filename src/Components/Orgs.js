import Card from 'react-bootstrap/Card';
import { Environment } from './Environment';
import ListGroup from 'react-bootstrap/ListGroup'
import { orgDetailsUrl } from '../Apis/Api';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Orgs({ org }) {

   

    return (
        <Card>
            {org && (<Card.Body>
                <Card.Title>Org ID: { org.id}</Card.Title>

                <ListGroup>
                    <ListGroup.Item><b>Org Name</b> : {org.orgName}</ListGroup.Item>
                    <ListGroup.Item><b>Org Credential</b> : {org.credential}</ListGroup.Item>
                    {org.env.map((environment)=><Environment env={environment}></Environment>)}

                </ListGroup>

            </Card.Body>)}
        </Card>

    );
}