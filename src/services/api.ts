import axios from 'axios';

export const api = axios.create({
  baseURL: `https://dev.to/api/`,
  headers: {
    'api-key': `${process.env.DEV_TO_TOKEN}`,
  },
});
