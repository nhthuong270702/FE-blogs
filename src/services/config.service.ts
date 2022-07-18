import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:4000`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})