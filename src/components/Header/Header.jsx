import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { PiFilmSlate } from "react-icons/pi";
import Socials from '../Socials/Socials';

export default function Header() {

    return <header className={css.header}>
        <Link to="/" className={css.title}>
        <PiFilmSlate className={css.movieIcon} />
                <span>Movie Guide</span>
            </Link>
        <Navigation />
        <Socials />
        </header>
}
