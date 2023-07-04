// Esse arquivo é um script que armazena o link base de uma API usando o Axios:

// Funcionalidades:
import axios from "axios";

// Base URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  });
export default api;