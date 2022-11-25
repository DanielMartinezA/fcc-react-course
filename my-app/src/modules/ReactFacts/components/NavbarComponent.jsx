import styles from '../ReactFactsApp.module.css';
import logo from '../assets/react-logo.png'

export default function NavbarComponent(props) {
  return (
    <nav className={`${styles.navbar} ${props.darkMode ? styles.navbarDark : ""}`}>
      {/* <img className="logo" src={require('../assets/react-logo.png')} alt="React logo" /> */}
      {/* <img className="logo" src="/assets/images/react-logo.png" alt="React logo" /> */}
      <img className={styles.logo} src={logo} alt="React logo" />
      <h3>ReactFacts</h3>
      <div className={styles.toggler}>
        <p className={styles.togglerLight}>Light</p>
        <div className={styles.togglerSlider} onClick={props.toggleDarkMode}>
          <div className={styles.togglerSliderCircle}></div>
        </div>
        <p className={styles.togglerDark}>Dark</p>
      </div>
      {/* <h4>React Course - Project 1</h4> */}
    </nav>
  )
}