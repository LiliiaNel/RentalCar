import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TMDBAPI from "../../tmdb-api";


export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getMovieCast() {
        try {
            const response = await TMDBAPI.get(`/movie/${movieId}/credits`);      
            setCast(response.data.cast);
          } catch {
              setIsError(true);
          }
        }
        getMovieCast();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!cast) return <p>Loading...</p>;
    
    return <div>
        <h2>The Cast</h2>
        <ul>
            {cast.map(({ id, name, character, profile_path}) => (
            <li key={id}>
                <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                />
                <p><strong>{name}</strong></p>
                <p>as {character}</p>
            </li>
            ))}
        </ul>
    </div>
}