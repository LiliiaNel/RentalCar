import css from './Banner.module.css';
import ViewCatalogBtn from '../ViewCatalogBtn/ViewCatalogBtn';

export default function Banner ()  {
    return <div className={css.banner}>
        <p className={css.text}>Find your perfect rental car</p>
        <p className={css.textSmall}>Reliable and budget-friendly rentals for any journey</p>
        <ViewCatalogBtn />
        </div>
}