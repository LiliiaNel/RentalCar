import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import LogoIcon from '../LogoIcon/LogoIcon';


export default function Header() {

    return <header className={css.header}>
        <Link to="/" className={css.title}>
          <LogoIcon className={css.icon} />
            </Link>
        <Navigation />
        </header>
}
