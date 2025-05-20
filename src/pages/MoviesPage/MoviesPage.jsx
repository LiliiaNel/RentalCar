import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function MoviesPage() {
  return <div className={css.container}>
          <SearchForm />
           <MovieList />
       </div>
 }
