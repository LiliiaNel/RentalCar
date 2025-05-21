import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { fetchSearchedMovies } from '../../services/tmdb-api';


export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 400);

  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      setIsError(false); 
      return;
    }

    async function getMoviesOnSearch() {
      try {
        setLoader(true);
        setIsError(false);
        const results = await fetchSearchedMovies(debouncedQuery);
        setMovies(results);
      } catch {
        setIsError(true);
      } finally {
        setLoader(false);
    }
    }

    getMoviesOnSearch();
  }, [debouncedQuery]);

  const noResults = !loader && !isError && movies.length === 0 && query;

  return <div className={css.container}>
          {loader && <Loader />}
          <SearchForm />
          {movies.length > 0 && <MovieList movies={movies} />}
          {isError && <NotFoundPage />}
          {noResults && <p className={css.noResults}>No results found for "{query}"</p>}
       </div>
 }
