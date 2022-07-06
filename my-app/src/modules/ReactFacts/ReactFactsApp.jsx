import styles from './ReactFactsApp.module.css';
import NavbarComponent from './components/NavbarComponent'
import MainComponent from './components/MainComponent'

export default function ReactFactsApp() {
  return (
    <div class={styles.flexWrapper}>
      <NavbarComponent />
      <MainComponent />
    </div>
  );
}