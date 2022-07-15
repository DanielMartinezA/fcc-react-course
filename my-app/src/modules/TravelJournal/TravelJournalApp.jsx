import styles from './TravelJournalApp.module.css';
import NavbarComponent from './components/NavbarComponent';
import CardComponent from './components/CardComponent';
import data from './assets/data';

export default function TravelJournalApp() {
  const cardElements = data.map(elem => {
    return <CardComponent
      key={elem.id} // needed when using map
      listLength={data.length}
      data={elem}
    />
  });
  return (
    <div className={styles.flexWrapper}>
      <NavbarComponent />
      <section className={styles.cardsList}>
        {cardElements}
      </section>
    </div>
  );
}