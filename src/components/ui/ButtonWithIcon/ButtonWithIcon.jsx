import styles from './ButtonWithIcon.module.css'

const ButtonWithIcon = ({ id, children, title, onClick, isActive }) => {
  return (
    <button id={id} className={`${isActive && styles.button_active} ${styles.button}`} onClick={onClick}>{title}
      {children}
    </button>
  )
}

export default ButtonWithIcon
