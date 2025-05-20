import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './MovieCast.module.css'
import { fetchMovieCast } from "../../services/tmdb-api";


export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getMovieCast() {
        try {
            const data = await fetchMovieCast(movieId);      
            setCast(data);
          } catch {
              setIsError(true);
          }
        }
        getMovieCast();
    }, [movieId]);

    if (isError) return <NotFoundPage />;
    if (!cast) return <p>Loading...</p>;
    
    return <div className={css.castWrapper}>
        <h2 className={css.title}>The Cast</h2>
        <ul className={css.castList}>
            {cast.map(({ id, name, character, profile_path}) => (
            <li key={id} className={css.listItem}>
                <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                        alt={`Portrait of ${name}`} className={css.castImg}
                />
                <p className={css.castName}>{name}</p>
                <p className={css.castCharacter}>as {character}</p>
            </li>
            ))}
        </ul>
    </div>
}