import styles from './ButtonWithIcon.module.css'

const ButtonWithIcon = ({ id, children, title, onClick, isActive, disabled, customClass }) => {
  return (
    <button id={id} className={`${isActive && styles.button_active} ${styles.button} ${customClass}`} onClick={onClick} disabled={disabled}>{title}
      {children}
    </button>
  )
}

export default ButtonWithIcon
