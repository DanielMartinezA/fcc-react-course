import styles from '../ReactFactsApp.module.css';
import logo from '../assets/react-logo.png'

export default function NavbarComponent() {
  return (
    <nav className={styles.navbar}>
      {/* <img className="logo" src={require('../assets/react-logo.png')} alt="React logo" /> */}
      {/* <img className="logo" src="/assets/images/react-logo.png" alt="React logo" /> */}
      <img className={styles.logo} src={logo} alt="React logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}