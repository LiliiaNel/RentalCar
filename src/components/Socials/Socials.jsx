import css from './Socials.module.css'
import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';

export default function Socials() {
    return <div className={css.wrapper}>
    <ul className={css.socialList}>
    <li>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebook className={css.socialIcon} />
      </a>
    </li>
    <li>
      <a href="https://t.me/" target="_blank">
        <FaTelegram className={css.socialIcon} />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram className={css.socialIcon} />
      </a>
    </li>
        </ul>
        </div>
}