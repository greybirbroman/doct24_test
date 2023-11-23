import styles from './ButtonWithIcon.module.css'

const ButtonWithIcon = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default ButtonWithIcon
