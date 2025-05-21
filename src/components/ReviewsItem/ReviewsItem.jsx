import css from './ReviewsItem.module.css';

export default function ReviewsItem({ author_details, content, created_at }) {
    const displayName = author_details.name || author_details.username;

    return (<div className={css.reviewWrapper}>
        <div className={css.authorDetaisBox}>
            <p className={css.authorUsername}>Author: {displayName}</p>
            <p className={css.authorRating}>Rating: {author_details.rating ?? "—"}</p>
        </div>
        <p className={css.reviewText}>{content}</p>
        <p className={css.creationDate}>{created_at}</p>
    </div>);
}