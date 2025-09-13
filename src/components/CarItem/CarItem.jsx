import css from './CarItem.module.css';
import defaultImg from '../../constants/images';
import { useNavigate } from "react-router-dom";

export default function CarItem({ car }) {
    const imageUrl = car.img || defaultImg;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/catalog/${car.id}`);
    };

    return (
        <div className={css.cardBox}>
            <img
                className={css.imgPoster}
                src={imageUrl}
                width={250}
                alt={`${car.brand} ${car.model}`}
            />
            <div className={css.description}>
                <div className={css.titleWrapper}>
                    <span className={css.carBrand}>{car.brand}</span>
                    <span className={css.carModel}>{car.model}</span>
                    <span className={css.carYear}>{car.year}</span>
                    <span className={css.carPrice}>${car.rentalPrice}</span>
                </div>
                <span className={css.carDetails}>{car.rentalCompany}</span>
                <span className={css.carDetails}>{car.address}</span>
                <span className={css.carDetails}>{car.mileage} km</span>
            </div>
            <button type="button" className={css.readMoreBtn} onClick={handleClick}>
                Read more
            </button>
        </div>
    );
}
