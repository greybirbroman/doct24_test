import styles from './Loader.module.css'
import LoaderImage from '../../../images/icons/loader.svg'

const Loader = ({ size }) => {
    return (
      <div className={styles.loader}>
          <img src={LoaderImage} alt='Loading...' width={size === 'small' ? 24 : 50} height={size === 'small' ? 24 : 50}/>
      </div>
    )
  }
  
  export default Loader