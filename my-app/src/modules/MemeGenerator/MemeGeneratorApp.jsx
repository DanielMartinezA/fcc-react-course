import styles from './MemeGeneratorApp.module.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import MainComponent from './components/MainComponent'

export default function MemeGeneratorApp() {
  return (
    <div className={styles.flexWrapper}>
      <NavbarComponent />
      <MainComponent />
    </div>
  );
}