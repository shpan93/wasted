import axios from 'axios';
import getEnvironment from './environment';

const apiConfig = {
  local: 'https://wasted-backend.herokuapp.com/',
  production: 'https://wasted-backend.herokuapp.com/',
};

export function getGetRequest(url) {
  const host = apiConfig[getEnvironment()];
  return axios.get(`${host}${url}/`);
}

export function getPostRequest(url, data) {
  const host = apiConfig[getEnvironment()];
  return axios.post(`${host}${url}/`, data);
}
