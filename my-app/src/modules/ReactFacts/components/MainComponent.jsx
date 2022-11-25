import styles from '../ReactFactsApp.module.css';
// import backgroundLogo from '../assets/background-logo.png'

export default function MainComponent(props) {
  return (
    <main className={`${styles.mainContent} ${props.darkMode ? styles.mainContentDark : ""}`}>
      <h1 className={styles.mainTitle}>Fun facts about React</h1>
      <ul className={styles.mainFacts}>
        <li><span>Was first released in 2013</span></li>
        <li><span>Was originally created by Jordan Walke</span></li>
        <li><span>Has well over 100K stars on GitHub</span></li>
        <li><span>Is maintained by Facebook</span></li>
        <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
      </ul>
      {/* <img className={`${styles.backgroundImage} ${styles.grayFilter}`} src={backgroundLogo} alt="Background logo" /> */}
    </main>
  )
}