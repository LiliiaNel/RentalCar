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
                { isError && <NotFoundPage/>};
            }
          }
          fetchMovieList();
        }, []);

    return <div>
        {moviesList.length > 0 && <ul className={css.list}>
            {moviesList.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title} </Link>
                </li>
            ))}
        </ul>}
    </div>
    
}