import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import css from './MovieReviews.module.css';
import { fetchMovieReviews } from "../../services/tmdb-api";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getMovieReviews() {
        try {
            const results = await fetchMovieReviews(movieId);      
            setReviews(results);
          } catch {
              setIsError(true);
          }
        }
        getMovieReviews();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!reviews) return <p>Loading...</p>;
    
    return <div className={css.reviewsWrapper}>
        <h2 className={css.title}>Reviews</h2>
        <ul className={css.reviewsList}>
            {reviews.length >0 && reviews.map(({ id, author_details, content, created_at}) => (
                <li key={id} className={css.reviewsItem}>
                    <div className={css.authorDetaisBox}>
                    <p className={css.authorUsername}>Username: {author_details.username}</p>
                    <p className={css.authorName}>{author_details.name}</p>
                    <p className={css.authorRating}>Rating: {author_details.rating}</p>
                        <p className={css.creationDate}>{created_at}</p> 
                 </div>    
                    <p className={css.reviewText}>{content}</p> 
            </li>
            ))}
        </ul>
    </div>
}