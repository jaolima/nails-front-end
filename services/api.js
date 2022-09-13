import axios from 'axios';

const api = axios.create({
  baseURL: 'http://65.108.217.99:3333/',
});

export default api;