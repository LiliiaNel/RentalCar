import css from './CatalogPage.module.css';
import CarList from '../../components/CarList/CarList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../../components/Loader/Loader';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { selectAppliedFilters } from '../../redux/filters/filtersSelectors';
import { selectCarsLoading, selectCarsError, selectCars, selectHasNextPage, selectCurrentPage } from '../../redux/cars/carsSelectors';


export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const isLoading = useSelector(selectCarsLoading);
  const isError = useSelector(selectCarsError);

  const appliedFilters = useSelector(selectAppliedFilters);
  const hasNextPage = useSelector(selectHasNextPage);
  const currentPage = useSelector(selectCurrentPage);

  const handleLoadMore = () => {
    if (!hasNextPage || isLoading) return;
    dispatch(fetchCars({ ...(appliedFilters|| {}), page: currentPage + 1 }));
  };

    useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars({ ...(appliedFilters || {}), page: 1 }));
    }
  }, [dispatch, appliedFilters, cars.length]);

  const listEndRef = useRef(null);

  const prevPageRef = useRef(currentPage);

  useEffect(() => {
    if (!isLoading && currentPage > 1 && currentPage > prevPageRef.current) {
      listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      prevPageRef.current = currentPage;
    }
  }, [cars, currentPage, isLoading]);



  const noResults = !isLoading && !isError && cars.length === 0;
  const showLoadMore = hasNextPage && !isLoading && cars.length > 0;  

   return (
    <div className={css.container}>
      <FiltersPanel />
      {isLoading && <Loader />}
      {isError && <NotFoundPage />}
      {noResults && <p className={css.noResults}>No results found</p>}
      {!isLoading && !isError && cars.length > 0 && <CarList cars={cars}/>}
      <div ref={listEndRef} />
      {showLoadMore&& <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />}
    </div>
  );
}
