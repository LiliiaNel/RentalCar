import css from './CatalogPage.module.css';
import CarList from '../../components/CarList/CarList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { selectAppliedFilters } from '../../redux/filters/filtersSelectors';
import { selectCarsLoading, selectCarsError, selectCars } from '../../redux/cars/carsSelectors';



export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectCarsLoading);
  const isError = useSelector(selectCarsError);
  const appliedFilters = useSelector(selectAppliedFilters);

  useEffect(() => {
    dispatch(fetchCars(appliedFilters || {}));
  }, [dispatch, appliedFilters]);


  const noResults = !isLoading && !isError && cars.length === 0;

   return (
    <div className={css.container}>
      <FiltersPanel />

      {isLoading && <Loader />}
      {!isLoading && !isError && cars.length > 0 && <CarList cars={cars} />}
      {isError && <NotFoundPage />}
      {noResults && <p className={css.noResults}>No results found</p>}
    </div>
  );
}
