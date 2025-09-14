import css from './Banner.module.css';
import { useNavigate } from 'react-router-dom';

export default function Banner ()  {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/catalog');
    };
    return <div className={css.banner}>
        <p className={css.text}>Find your perfect rental car</p>
        <p className={css.textSmall}>Reliable and budget-friendly rentals for any journey</p>
        <button className={css.catalogBtn} onClick={handleClick}>View Catalog</button>
        </div>
}