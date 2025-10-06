import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import Icon from '../Icon/Icon';


export default function Header() {

    return <header className={css.header}>
          <div className={css.headerContainer}>
            <Link to="/" className={css.title}>
              <Icon name="icon-logo" className={css.icon} width={104} height={16} viewBox="0 0 208 32" />
                </Link>
            <Navigation />
          </div>
        </header>
}
