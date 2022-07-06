import styles from '../AirBnbCloneApp.module.css';
import logo from '../assets/airbnb-logo.png'

export default function NavbarComponent() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="AirBnb logo" />
    </nav>
  )
}