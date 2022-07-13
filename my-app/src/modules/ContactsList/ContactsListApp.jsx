import styles from './ContactsListApp.module.css';
import ContactCardComponent from './components/ContactCardComponent';
// import JokeCardComponent from './components/JokeCardComponent';
import cardsData from './assets/cardsData';

export default function ContactsListApp() {
  const cardElements = cardsData.map(data => {
    return <ContactCardComponent
      imgPath={data.imgPath}
      name={data.name}
      phone={data.phone}
      email={data.email}
    />
  })

  return (
    <div class={styles.flexWrapper}>
      {cardElements}
      {/* <JokeCardComponent
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      /> */}
    </div>
  );
}