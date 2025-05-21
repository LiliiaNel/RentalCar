import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';
import { useEffect, useState } from "react";
import { fetchMovieList } from "../../services/tmdb-api";
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function HomePage() {

    const [moviesList, setMoviesList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loader, setLoader] = useState(false);
        
    useEffect(() => {
            
        async function getMovieList() {
            try {
                setLoader(true);
                const results = await fetchMovieList();
                setMoviesList(results);
                setIsError(false); 
            } catch {
                setIsError(true);
            } finally {
                setLoader(false);
            }
        }
        getMovieList();
    }, []);
    
    const noResults = !loader && !isError && (!moviesList || moviesList.length === 0);

    return <div className={css.container} >
        {!isError && <h1 className={css.title}>Trending today</h1>}
        {loader && <Loader />}
        {moviesList.length > 0 && <MovieList movies={moviesList} />}
        {noResults && <p className={css.noResults}>No movies found.</p>}
        {isError && <NotFoundPage />}
    </div >
}