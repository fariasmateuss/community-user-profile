import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.to/api/',
});

export default api;
