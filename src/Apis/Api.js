import axios from 'axios'


const baseUrl = 'http://apigee-devops.sidglobal.cloud:8081';

export const getPlanetsUrl = `${baseUrl}/planet`

export const orgDetailsUrl = (orgId,planetId) => {return `${baseUrl}/planet/${planetId}/orgs/${orgId}`}

