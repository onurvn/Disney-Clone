import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = () => 
  axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId = (id) => 
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
