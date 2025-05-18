import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export default function Navigation() {
    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };  
    
    return <header>
                <nav className={css.nav}>
                    <NavLink to="/" className={buildLinkClass}>
                    Home
                    </NavLink>
                    <NavLink to="/movies" className={buildLinkClass}>
                    Movies
                    </NavLink>
                    {/* <NavLink to="/movies/:movieId" className={buildLinkClass}>
                    Products
                    </NavLink> */}
                </nav>
        </header>
}