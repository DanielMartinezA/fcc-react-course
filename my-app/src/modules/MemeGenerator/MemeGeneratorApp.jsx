import styles from './MemeGeneratorApp.module.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import MainComponent from './components/MainComponent'
import CounterComponent from './components/ExtraCounterComponent/CounterComponent'
import ItemListComponent from './components/ItemListComponent/ItemListComponent';

export default function MemeGeneratorApp() {
  return (
    <div className={styles.flexWrapper}>
      <NavbarComponent />
      <MainComponent />
      <CounterComponent />
      <ItemListComponent/>
    </div>
  );
}