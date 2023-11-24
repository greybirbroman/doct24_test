import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link to='/'>
      <LogoImage alt='Лого, иконка, изображение - React'/>
    </Link>
  );
};

export default Logo;
