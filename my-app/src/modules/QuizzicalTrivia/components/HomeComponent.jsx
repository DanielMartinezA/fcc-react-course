import styles from '../QuizzicalTriviaApp.module.css';

export default function HomeComponent(props) {

  return (
    <div className={styles.homeComponent}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.description}>A game of trivia</p>
      <button
        className={`${styles.startButton} ${styles.cleanButton}`}
        onClick={props.startGame}
      >
        Start quiz
      </button>
    </div>
  )
}
