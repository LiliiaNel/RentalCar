import Navigation from "../../components/Navigation/Navigation";
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
    return <div className={css.container}>
        <Navigation />
        <MovieList />
    </div>
}