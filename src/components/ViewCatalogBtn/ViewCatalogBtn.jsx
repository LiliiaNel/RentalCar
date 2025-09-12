import { useNavigate } from 'react-router-dom';
import css from './ViewCatalogBtn.module.css';

export default function ViewCatalogBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <button className={css.button} onClick={handleClick}>
      View Catalog
    </button>
  );
}
