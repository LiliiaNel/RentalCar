
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import TMDBAPI from '../../tmdb-api';

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("query") ?? "";
    const [debouncedQuery] = useDebounce(query, 300);

    const changeSearchQuery = (event) => {
        const newQuery = event.current.value;

        const nextSearchParams = new URLSearchParams(searchParams);

        if (newQuery !== "") {
            nextSearchParams.set("query", newQuery);
        } else { nextSearchParams.delete("query") };
    };

    useEffect(() => {
        if (!debouncedQuery) {
            setMovies([]);
            return
        }
        
        async function fetchMovies() {
            try {
              setIsError(false);
              const response = await TMDBAPI.get(`search/movie?query=${debouncedQuery}`);
              setMovies(response.data.results || []);
            } catch (error) {
              setIsError(true);
            }
          }
        fetchMovies();
    }, [debouncedQuery]);

    if (isError) return <NotFoundPage />;
    if (!movies) return <p>Loading...</p>;


     return <div className={css.container}>
         <form onSubmit={(e) => e.preventDefault()}>
             <input type="text" name="movieSearch" value={query} onChange={changeSearchQuery} placeholder="Type to search..."
          autoComplete="off" />
             <button type='submit'>Search</button>
         </form>
       </div>
 }
