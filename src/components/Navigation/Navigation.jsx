import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive });
    
  return <div className={css.wrapper}>
                <nav className={css.nav}>
                    <NavLink to="/" className={buildLinkClass}>
                    Home
                    </NavLink>
                    <NavLink to="/catalog" className={buildLinkClass}>
                    Catalog
                    </NavLink>
                </nav>
        </div>
}