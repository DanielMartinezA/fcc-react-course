import styles from './NavbarComponent.module.css';
import logo from '../../assets/troll-face.png'

export default function NavbarComponent() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Troll Face" />
      <h3>Meme Generator</h3>
      <h4>React Course - Project 3</h4>
    </nav>
  )
}