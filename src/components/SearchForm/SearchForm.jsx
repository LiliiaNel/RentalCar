import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import { fetchSearchedMovies } from '../../services/tmdb-api'
import MovieList from '../MovieList/MovieList';

export default function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("query") ?? "";
    const [debouncedQuery] = useDebounce(query, 300);

    const changeSearchQuery = (event) => {
        const newQuery = event.currentTarget.value;

        const nextSearchParams = new URLSearchParams(searchParams);

        if (newQuery !== "") {
            nextSearchParams.set("query", newQuery);
        } else { nextSearchParams.delete("query") };

        setSearchParams(nextSearchParams);
    };

    useEffect(() => {
        if (!debouncedQuery) {
            setMovies([]);
            return
        }
        async function getMoviesOnSeach() {
            try {
              setIsError(false);
              const results = await fetchSearchedMovies(debouncedQuery);
              setMovies(results);
            } catch {
              setIsError(true);
            }
          }
          getMoviesOnSeach();
    }, [debouncedQuery]);

    if (isError) return <NotFoundPage />;
    if (!movies) return <p>Loading...</p>;


     return <div className={css.container}>
         <form onSubmit={(e) => e.preventDefault()}>
             <input type="text" name="movieSearch" value={query} onChange={changeSearchQuery} placeholder="Type to search..."
          autoComplete="off" />
             <button type='submit'>Search</button>
         </form>
         <MovieList movies={movies} />
       </div>
 }
