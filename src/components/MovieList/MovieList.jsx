import { Link, useLocation } from "react-router-dom";
import css from './MovieList.module.css';

export default function MovieList({movies}) {
  const location = useLocation();
  console.log(movies);
  
  if (!movies || movies.length === 0) {
    return <p className={css.noResults}>No movies found.</p>;
  }

  return <div className={css.listWrapper}>
        {movies.length > 0 && <ul className={css.list}>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link className={css.movieLink} to={`/movies/${movie.id}`} state={location}>
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