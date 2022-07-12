import styles from './ContactsListApp.module.css';
import ContactCardComponent from './components/ContactCardComponent';
import JokeCardComponent from './components/JokeCardComponent';

export default function ContactsListApp() {
  return (
    <div class={styles.flexWrapper}>
      <ContactCardComponent 
        imgPath="mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCardComponent 
        imgPath="fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactCardComponent 
        imgPath="felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <ContactCardComponent 
        imgPath="pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      {/* <JokeCardComponent
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      /> */}
    </div>
  );
}