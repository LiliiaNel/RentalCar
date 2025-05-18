import { useParams,  NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TMDBAPI from '../../tmdb-api';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

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

    return (movie && <div>
        <button type="button">Go back</button>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <div>
            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
        </div>
        <Outlet />
    </div>);
}