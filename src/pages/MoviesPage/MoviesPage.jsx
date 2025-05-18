
import css from './MoviesPage.module.css';

export default function MoviesPage () {
     return <div className={css.container}>
         <form action="">
             <label htmlFor="movieSearch"></label>
             <input type="text" name="movieSearch"/>
             <button type='submit'>Search</button>
         </form>
       </div>
 }
