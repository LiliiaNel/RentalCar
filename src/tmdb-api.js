import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_KEY;
const TMDBAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export default TMDBAPI;