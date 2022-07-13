import styles from './AirBnbCloneApp.module.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import CardComponent from './components/CardComponent';

export default function AirBnBCloneApp() {
  return (
    <div class={styles.flexWrapper}>
      <NavbarComponent />
      <HeroComponent />
      <CardComponent
        imgAlt="Katie Zaferes"
        imgPath="katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}