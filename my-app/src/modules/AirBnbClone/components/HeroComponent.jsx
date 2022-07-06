import styles from '../AirBnbCloneApp.module.css';
import photoGrid from '../assets/photo-grid.png';

export default function NavbarComponent() {
  return (
    <section className={styles.hero}>
      <img className={styles.photoGrid} src={photoGrid} alt="experiences grid" />
      <h1 className={styles.header}> Online Experiences</h1>
      <p className={styles.text}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}