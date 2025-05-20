import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { fetchSearchedMovies } from '../../services/tmdb-api';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      return;
    }

    async function getMoviesOnSearch() {
      try {
        setIsError(false);
        const results = await fetchSearchedMovies(debouncedQuery);
        setMovies(results);
      } catch {
        setIsError(true);
      }
    }

    getMoviesOnSearch();
  }, [debouncedQuery]);

  if (isError) return <NotFoundPage />;
  if (!movies) return <p>Loading...</p>;

  return <div className={css.container}>
          <SearchForm />
          {movies.length > 0 && <MovieList movies={movies} />}
       </div>
 }
