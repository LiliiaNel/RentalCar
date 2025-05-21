import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './MovieCast.module.css'
import { fetchMovieCast } from "../../services/tmdb-api";
import defaultImg from "../../constants/images";
import CastItem from "../CastItem/CastItem";
import Loader from '../Loader/Loader';


export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    console.log(cast);
    const [isError, setIsError] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        async function getMovieCast() {
            try {
                setLoader(true);
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch {
                setIsError(true);
            } finally {
                setLoader(false);
            }
        }
            getMovieCast();
        
    }, [movieId]);

    const noCast = !loader && cast.length === 0;
    const hasCast = !loader && cast.length > 0;

    return <div className={css.castWrapper}>
        <h2 className={css.title}>The Cast</h2>
         {loader && <Loader />}
        {hasCast && <ul className={css.castList}>
            {cast.map(({ id, name, character, profile_path }) => (
                <li key={`${id}-${character}`} className={css.listItem}>
                    <CastItem
                        name={name}
                        character={character}
                        profile_path={profile_path}
                        defaultImg={defaultImg}
                    />
                </li>
            ))}
        </ul>}
        {noCast && <p className={css.noCast}>No cast information available.</p>}
        {isError && <NotFoundPage />}
    </div>
}