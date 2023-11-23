import styles from './Loader.module.css'
import LoaderImage from '../../../images/icons/loader.svg'

const Loader = () => {
    return (
      <div className={styles.loader}>
          <img src={LoaderImage} alt='Loading...' width={50} height={50}/>
      </div>
    )
  }
  
  export default Loader