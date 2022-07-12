import {useState} from 'react';

import styles from '../ContactsListApp.module.css';

// https://stackoverflow.com/questions/65010686/adding-and-removing-a-classlist-in-react-js
// https://www.npmjs.com/package/react-native-flip-component
export default function JokeCardComponent(props) {
  const [isFlipped, flipCard] = useState(false);

  function flipCardButton() {
    flipCard(!isFlipped);
  }

  return (
    <div
      className={`${styles.perspectiveContainer} ${isFlipped ? styles.flipAnimation : ""}`}
      id="perspectiveContainer"
      onClick={flipCardButton}
    >
      <div className={styles.jokeCard}>
        <h1 className={styles.jokeSetup}>{isFlipped ? props.punchline : props.setup}</h1>
      </div>
    </div>
  )
}