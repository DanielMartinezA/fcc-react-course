import styles from './AirBnbCloneApp.module.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import CardComponent from './components/CardComponent';
import cardsData from './assets/cardsData';

export default function AirBnBCloneApp() {
  const cardElements = cardsData.map(data => {
    return <CardComponent
      key={data.id} // needed when using map
      data={data}
      // this can also be done using object spread syntax
      // {...data}
      // this adds to props all the attributes of the data object
    />
  });
  return (
    <div className={styles.flexWrapper}>
      <NavbarComponent />
      <HeroComponent />
      <section className={styles.cardsList}>
        {cardElements}
      </section>
    </div>
  );
}