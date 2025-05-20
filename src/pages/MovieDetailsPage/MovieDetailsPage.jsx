import { useParams,  NavLink, Link, Outlet, useLocation} from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import { fetchMovie } from '../../services/tmdb-api';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import css from './MovieDetailsPage.module.css';
import { defaultImg } from "../../constants/images";

export default function MovieDetailsPage() {
    const location = useLocation();
    const backLink = useRef(location.state);

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        if (!movieId) return;
        async function getMovieDetails() {
            try {
                const data = await fetchMovie(movieId);      
                setMovie(data);
              } catch {
                  setIsError(true);
              }
            }
            getMovieDetails();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!movie) return <p>Loading...</p>;

    return (movie && <div className={css.container} >
        <Link to={backLink.current} className={css.backBtn}>Go back</Link>
        <h1 className={css.title}>{movie.title}</h1>
        <div className={css.movieInfoWrapper}>
        <div className={css.moviePosterBox}>
        <img className={css.imgPoster}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : defaultImg}
             alt={`poster`}
            />
        <p className={css.releaseDate}>Release date: {movie.release_date}</p>
        </div>
            <p className={css.overview}>{movie.overview}</p>
        </div>
            <ul className={css.linkList}>
                <li>
                    <NavLink to="cast" className={css.navLink}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={css.navLink}>Reviews</NavLink>
                </li>
        </ul>
       <Suspense fallback={<p>Loading page ...</p>}>
            <Outlet />
        </Suspense>
    </div>);
}