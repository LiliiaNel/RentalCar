import css from './Banner.module.css';
import { useNavigate } from 'react-router-dom';

export default function Banner ()  {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/catalog');
    };
    return <div className={css.banner}>
        <h1 className={css.text}>Find your perfect rental car</h1>
        <p className={css.textSmall}>Reliable and budget-friendly rentals for any journey</p>
        <button className={css.catalogBtn} onClick={handleClick}>View Catalog</button>
        </div>
}