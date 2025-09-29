import css from './LoadMoreButton.module.css';
import Loader from '../Loader/Loader';

export default function LoadMoreButton ({ onClick, isLoading }) {
    return <div className={css.wrapper}>
      <button 
        onClick={onClick} 
        disabled={isLoading}
        className={css.loadMoreBtn}
      >
        {isLoading ? <Loader/> : "Load more"}
      </button>
    </div>
}