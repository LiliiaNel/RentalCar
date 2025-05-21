import { Link } from 'react-router-dom';
import css from './MovieItem.module.css';
import defaultImg from '../../constants/images';

export default function MovieItem({ movie, location }) {
    
    const imageUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : defaultImg;
  
    return (
        <Link className={css.movieLink} to={`/movies/${movie.id}`} state={{ from: location }} >
          <img
            className={css.imgPoster}
            src={imageUrl}
            width={250}
            alt="poster"
          />
          <div className={css.titleWrapper}>
            <span className={css.movieTitle}>{movie.title}</span>
          </div>
        </Link>
    );
  };
  