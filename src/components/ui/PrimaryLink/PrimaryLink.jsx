import styles from './PrimaryLink.module.css';
import { Link } from 'react-router-dom';

const PrimaryLink = ({ title, to, customClass, align, onClick }) => {
  return (
    <Link className={`${styles.link} ${customClass}`} to={to} style={{alignSelf: align}} onClick={onClick}>
      {title}
    </Link>
  );
};

export default PrimaryLink;