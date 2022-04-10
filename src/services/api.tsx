import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://technicalsharesquad8.herokuapp.com',
});
