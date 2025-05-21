import { useLocation } from "react-router-dom";
import css from './MovieList.module.css';
import MovieItem from '../MovieItem/MovieItem';

export default function MovieList({movies}) {
  const location = useLocation();
  

  return <div className={css.listWrapper}>
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.listItem} key={movie.id}>
          <MovieItem movie={movie} location={location} />
          </li>
      ))}
    </ul>
    </div>
    
}