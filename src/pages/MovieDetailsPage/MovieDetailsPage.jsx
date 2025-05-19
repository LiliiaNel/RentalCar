import { useParams,  NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TMDBAPI from '../../tmdb-api';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function getMovieDetails() {
            try {
                const response = await TMDBAPI.get(`/movie/${movieId}`);      
                setMovie(response.data);
              } catch {
                  setIsError(true);
              }
            }
            getMovieDetails();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!movie) return <p>Loading...</p>;

    return (movie && <div className={css.container} >

        <h1 className={css.title}>{movie.title}</h1>
        <div className={css.movieInfoWrapper}>
        <div className={css.moviePosterBox}>
        <img className={css.imgPoster}
             src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
             alt={`poster image`}
            />
        <p className={css.releaseDate}>Release date: {movie.release_date}</p>
        </div>
            <p className={css.overview}>{movie.overview}</p>
            </div>
        <button type="button" className={css.backBtn}>Go back</button>
            <ul className={css.linkList}>
                <li>
                    <NavLink to="cast" className={css.navLink}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={css.navLink}>Reviews</NavLink>
                </li>
            </ul>
        <Outlet />
    </div>);
}