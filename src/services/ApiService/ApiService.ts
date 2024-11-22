import axios, {AxiosRequestHeaders} from 'axios';
import {BASE_URL} from './constants';

const ApiService = axios.create();

ApiService.interceptors.request.use(
  async request => {
    request.baseURL = BASE_URL;
    request.headers = {
      'Content-Type': 'application/json',
    } as AxiosRequestHeaders;

    if (request.method === 'GET') {
      request.params = request.data;
      delete request.data;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

ApiService.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return Promise.reject(error);
  },
);

export default ApiService;
