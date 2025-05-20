import css from './Footer.module.css'
import Socials from '../Socials/Socials';

export default function Footer() {
    return  (
      <footer className={css.footer}>
        <div className={css.socialsWrapper}>
          <Socials />
          </div>
            <p className={css.text}> {new Date().getFullYear()} Movie Guide</p>
            <button
                className={css.scrollTopBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑ Back to top
            </button>
        </footer>
      );
}