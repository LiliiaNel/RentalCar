import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import { PiFilmSlate } from "react-icons/pi";
import Socials from '../Socials/Socials';

export default function Header() {

    return <header className={css.header}>
        <div className={css.titleWrapper}>
        <PiFilmSlate className={css.movieIcon} />
            <span className={css.title}>Movie Guide</span>
        </div>
        <Navigation />
        <Socials />
        </header>
}
