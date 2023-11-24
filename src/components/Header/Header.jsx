import styles from './Header.module.css'
import Logo from "../Logo/Logo"

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <span className={styles.span}>JSON Placeholder API</span>
    </header>
  )
}

export default Header
