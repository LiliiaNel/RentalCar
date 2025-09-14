import { useSelector, useDispatch } from "react-redux";
import css from './CarItem.module.css';
import defaultImg from '../../constants/images';
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
// import { toggleFavorite } from "../../redux/cars/carsSlice";
// import { selectFavorites } from "../../redux/favorites/favoritesSelectors";

export default function CarItem({ car }) {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const favorites = useSelector(selectFavorites);
    // const isFav = favorites.includes(car.id);

    const handleClick = () => {
        navigate(`/catalog/${car.id}`);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        // dispatch(toggleFavorite(car.id));
    };

    const fullAddress = car.address;
    const addressParts = fullAddress.split(',').map(part => part.trim());
    const cityAndCountry = addressParts.slice(-2).join(' | ');


    return (
        <div className={css.cardBox}>
            <div className={css.imgWrapper}>
                <img
                    className={css.imgPoster}
                    src={car.img || defaultImg}
                    width={250}
                    alt={`${car.brand} ${car.model}`}
                />
                <button
                    type="button"
                    className={css.favButton}
                    onClick={handleFavoriteClick}
                    aria-label="Add to favorites"
                >
                    <Icon
                        name="icon-heart"
                        width={16}
                        height={16}
                        // className={isFav ? css.favActive : ""}
                    />
                </button>
            </div>

            <div className={css.description}>
                <div className={css.titleWrapper}>
                    <div className={css.carInfo}>
                        <span className={css.carBrand}>{car.brand} </span>
                        <span className={css.carModel}>{car.model}, </span>
                        <span className={css.carYear}>{car.year}</span>
                    </div>
                    <span className={css.carPrice}>${car.rentalPrice}</span>
                </div>
                <div className={css.textCover}>
                    <span className={css.carDetails}>{cityAndCountry} |</span>
                    <span className={css.carDetails}>{car.rentalCompany} |</span>
                </div>
                <div className={css.textCover}>
                    <span className={css.carDetails}>{car.type} | </span>
                    <span className={css.carDetails}>{car.mileage} km</span>
                </div>
            </div>

            <button type="button" className={css.readMoreBtn} onClick={handleClick}>
                Read more
            </button>
        </div>
    );
}
