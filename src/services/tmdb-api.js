import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_KEY;
const TMDBAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export async function fetchMovieList() {
  const response = await TMDBAPI.get("/trending/movie/day", {
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
}

export async function fetchSearchedMovies(debouncedQuery) {
  const response = await TMDBAPI.get(`search/movie?query=${debouncedQuery}`);
  return response.data.results || [];
}


export async function fetchMovie(movieId) {
  const response = await TMDBAPI.get(`/movie/${movieId}`);     
  return response.data;
};

export async function fetchMovieCast(movieId) {
  const response = await TMDBAPI.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export async function fetchMovieReviews(movieId) {
  const response = await TMDBAPI.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
