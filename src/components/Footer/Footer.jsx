import css from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return  (
        <footer className={css.footer}>
          <div className={css.container}>
            <p className={css.text}> {new Date().getFullYear()} MovieHub</p>
            <button
                className={css.scrollTopBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑ Back to top
            </button>
          </div>
        </footer>
      );
}