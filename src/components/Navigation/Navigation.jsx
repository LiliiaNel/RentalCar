import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { RiMovie2AiLine } from "react-icons/ri";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive });
    
  return <header className={css.header}>
    <RiMovie2AiLine className={css.movieIcon} />
                <nav className={css.nav}>
                  
                    <NavLink to="/" className={buildLinkClass}>
                    Home
                    </NavLink>
                    <NavLink to="/movies" className={buildLinkClass}>
                    Movies
                    </NavLink>
                </nav>
        </header>
}