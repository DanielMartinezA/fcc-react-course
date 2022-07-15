import styles from '../TravelJournalApp.module.css';
import logo from '../assets/logo.png';

export default function NavbarComponent() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="journal logo" />
      <h1>my travel journal.</h1>
    </nav>
  )
}