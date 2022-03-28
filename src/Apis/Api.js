import axios from 'axios'


const baseUrl = 'http://apigee-devops.sidglobal.cloud:8081';

export const getPlanetsUrl = `${baseUrl}/planet`

export const orgDetailsUrl = (orgId,planetId) => {return `${"https://cors-anywhere.herokuapp.com/"}${baseUrl}/planet/${planetId}/orgs/${orgId}`}

export const orgUpdateUrl = (orgId,planetId) => {return `${"https://cors-anywhere.herokuapp.com/"}${baseUrl}/planet/${planetId}/orgs/${orgId}/`}



