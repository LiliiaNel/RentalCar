import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TMDBAPI from "../../tmdb-api";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getMovieReviews() {
        try {
            const response = await TMDBAPI.get(`/movie/${movieId}/reviews`);      
            setReviews(response.data.results);
          } catch {
              setIsError(true);
          }
        }
        getMovieReviews();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!reviews) return <p>Loading...</p>;
    
    return <div>
        <h2>Reviews</h2>
        <ul>
            {reviews.length >0 && reviews.map(({ id, author_details, content, created_at}) => (
                <li key={id}>
                    <p><strong>{author_details.name}</strong></p>
                    <p>{author_details.username}</p>
                    <p>{author_details.rating}</p>
                    <img
                    src={`https://image.tmdb.org/t/p/w200${author_details.avatar_path}`}
                    alt={author_details.name}
                    />
                    <p>{created_at}</p>   
                    <p>{content}</p> 
            </li>
            ))}
        </ul>
    </div>
}