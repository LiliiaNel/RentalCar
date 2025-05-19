import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TMDBAPI from "../../tmdb-api";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import css from './MovieList.module.css';

export default function MovieList() {
    const [moviesList, setMoviesList] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        
        async function fetchMovieList() {
            try {
              const response = await TMDBAPI.get("/movie/popular", {
                params: {
                  language: "en-US",
                  page: 1,
                },
              });
                setMoviesList(response.data.results);
                
            } catch {
                setIsError(true);
            }
          }
          fetchMovieList();
    }, []);
    if (isError) return <NotFoundPage />;
    if (!moviesList) return <p>Loading...</p>;

  return <div className={css.listWrapper}>
        {moviesList.length > 0 && <ul className={css.list}>
            {moviesList.map((movie) => (
              <li key={movie.id}>
                <Link className={css.movieLink} to={`/movies/${movie.id}`}>
                <img className={css.imgPoster}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`poster image`}
                />
                <div className={css.titleWrapper}>
                <span className={css.movieTitle}>{movie.title}</span>
                  </div>
                  </Link>
                </li>
            ))}
        </ul>}
    </div>
    
}