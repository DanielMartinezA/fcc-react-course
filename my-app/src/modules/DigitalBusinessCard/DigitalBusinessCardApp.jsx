import styles from './DigitalBusinessCardApp.module.css';
import InfoComponent from './components/InfoComponent';
import AboutComponent from './components/AboutComponent';
import InterestsComponent from './components/InterestsComponent';
import FooterComponent from './components/FooterComponent';

export default function DigitalBusinessCardApp() {
  return (
    <div class={styles.flexWrapper}>
      <InfoComponent />
      <AboutComponent />
      <InterestsComponent />
      <FooterComponent />
    </div>
  );
}