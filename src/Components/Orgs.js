import Card from 'react-bootstrap/Card';
import { Environment } from './Environment';
import ListGroup from 'react-bootstrap/ListGroup'
import { orgDetailsUrl } from '../Apis/Api';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Orgs({ orgId, planetId }) {

    const [org, setOrg] = useState();

    useEffect(() => {

        getOrgApi();

    }, [])

    const getOrgApi = () => {

        axios.get(orgDetailsUrl(orgId, planetId)).then((response) => {
            const orgdata = response;
            setOrg(orgdata.data);

        }).catch(error => console.log(error));




    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Org ID: {orgId}</Card.Title>

                {org && (<ListGroup>
                    <ListGroup.Item><b>Org Name</b> : {org.orgName}</ListGroup.Item>
                    <ListGroup.Item><b>Org Credential</b> : {org.credential}</ListGroup.Item>
                    <Environment></Environment>

                </ListGroup>)}

            </Card.Body>
        </Card>

    );
}