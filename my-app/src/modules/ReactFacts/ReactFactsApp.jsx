import styles from './ReactFactsApp.module.css';
import NavbarComponent from './components/NavbarComponent'
import MainComponent from './components/MainComponent'
import { useState } from 'react';

export default function ReactFactsApp() {

  const [darkModeState, setDarkModeState] = useState(false);

  function toggleDarkModeFunc() {
    setDarkModeState(prevState => !prevState)
  }

  return (
    <div className={styles.flexWrapper}>
      <NavbarComponent
        darkMode={darkModeState}
        toggleDarkMode={toggleDarkModeFunc}
      />
      <MainComponent darkMode={darkModeState}/>
    </div>
  );
}