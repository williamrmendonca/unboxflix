import axios from 'axios';
import { API_KEY } from './config';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
});

export default api;
