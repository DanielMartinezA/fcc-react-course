import styles from './AirBnbCloneApp.module.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import CardComponent from './components/CardComponent';

export default function AirBnBCloneApp() {
  return (
    <div class={styles.flexWrapper}>
      <NavbarComponent />
      <HeroComponent />
      <CardComponent />
    </div>
  );
}