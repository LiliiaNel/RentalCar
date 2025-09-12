import { useLocation } from "react-router-dom";
import css from './CarList.module.css';
import CarItem from '../CarItem/CarItem';

export default function CarList({cars}) {
  const location = useLocation();
  

  return <div className={css.listWrapper}>
    <ul className={css.list}>
      {cars.map((car) => (
        <li className={css.listItem} key={car.id}>
          <CarItem car={car} location={location} />
          </li>
      ))}
    </ul>
    </div>
    
}