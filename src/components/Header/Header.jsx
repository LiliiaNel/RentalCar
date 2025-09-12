import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import css from './Header.module.css';


export default function Header() {

    return <header className={css.header}>
        <Link to="/" className={css.title}>
        {/* <PiFilmSlate className={css.movieIcon} /> */}
                <span>Car rent</span>
            </Link>
        <Navigation />
        </header>
}
