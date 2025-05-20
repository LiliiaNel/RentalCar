import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';

export default function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const changeSearchQuery = (event) => {
        const newQuery = event.currentTarget.value;

        const nextSearchParams = new URLSearchParams(searchParams);

        if (newQuery !== "") {
            nextSearchParams.set("query", newQuery);
        } else { nextSearchParams.delete("query") };

        setSearchParams(nextSearchParams);
    };

     return <div className={css.container}>
         <form className={css.form} onSubmit={(event) => event.preventDefault()}>
             <input className={css.input}
                 type="text"
                 name="movieSearch"
                 value={query}
                 onChange={changeSearchQuery}
                 placeholder="Type to search..."
                 autoComplete="off" />
             <button type='submit' className={css.searchBtn}>Search</button>
         </form>
       </div>
 }
