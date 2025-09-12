import css from './CarItem.module.css';
import defaultImg from '../../constants/images';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn';

export default function CarItem({ car, location }) {
    
    const imageUrl = car.img || defaultImg;
  
    return (
        <div className={css.carLink} to={`/movies/${car.id}`} state={{ from: location }} >
          <img
            className={css.imgPoster}
            src={imageUrl}
            width={250}
            alt={`${car.brand} ${car.model}`}
          />
          <div className={css.decsription}>
            <div className={css.titleWrapper}>
            <span className={css.carBrand}>{car.brand}</span>
            <span className={css.carModel}>{car.model}</span>
            <span className={css.carYear}>{car.year}</span>
            <span className={css.carPrice}>{car.rentalPrice}</span>
            </div>
            <span className={css.carDetails}>{car.rentalCompany}</span>
            <span className={css.carDetails}>{car.address}</span>
            <span className={css.carDetails}>{car.mileage}</span>
          </div>
          <ReadMoreBtn/>
        </div>
    );
  };
  