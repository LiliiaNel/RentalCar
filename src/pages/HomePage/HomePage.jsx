import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';
import { useEffect, useState } from "react";
import { fetchMovieList } from "../../services/tmdb-api";

export default function HomePage() {

    const [moviesList, setMoviesList] = useState([]);
    const [isError, setIsError] = useState(false);
        
    useEffect(() => {
            
        async function getMovieList() {
            try {
                const results = await fetchMovieList();
                setMoviesList(results);
            } catch {
                setIsError(true);
            }
        }
        getMovieList();
    }, []);
    
    if (isError) return <NotFoundPage />;
    if (!moviesList) return <p>Loading...</p>;

    return <div className={css.container}>
        <MovieList movies={moviesList} />
    </div>
}