import css from './CarItem.module.css';
import defaultImg from '../../constants/images';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn';

export default function CarItem({ car, location }) {
    
    const imageUrl = car.poster_path
      ? `https://image.tmdb.org/t/p/w500/${car.poster_path}`
      : defaultImg;
  
    return (
        <div className={css.carLink} to={`/movies/${car.id}`} state={{ from: location }} >
          <img
            className={css.imgPoster}
            src={imageUrl}
            width={250}
            alt="poster"
          />
          <div className={css.titleWrapper}>
            <span className={css.carBrand}>{car.brand}</span>
            <span className={css.carModel}>{car.model}</span>
            <span className={css.carYear}>{car.year}</span>
            <span className={css.carPrice}>{car.rentalPrice}</span>
            <span className={css.carCompany}>{car.rentalCompany}</span>
            <span className={css.carAddress}>{car.address}</span>
            <span className={css.carMileage}>{car.mileage}</span>
          </div>
          <ReadMoreBtn/>
        </div>
    );
  };
  