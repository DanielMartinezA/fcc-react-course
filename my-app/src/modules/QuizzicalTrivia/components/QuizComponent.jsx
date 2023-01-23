import styles from '../QuizzicalTriviaApp.module.css';
import QuestionComponent from './QuestionComponent';

export default function QuizComponent(props) {
  // question = {key : string, questionText : string, correctAnswer : {key, value}, incorrectAnswers : [...{key, value}]}
  const questionElements = props.questions.map(question => (
    <QuestionComponent
      key={question.key}
      idValue={question.key}
      questionText={question.questionText}
      correctAnswer={question.correctAnswer}
      options={question.options}
      answer={props.answers[question.key]}
      handleSelection={props.handleSelection}
      isFinished={props.results.isFinished}
    />
  ))

  return (
    <div className={styles.quizComponent}>
      {questionElements}
      {
        props.results.isFinished ?
          <div className={styles.quizBottom}>
            <h2 className={styles.quizResults}>You scored {props.results.score}/5 correct answers</h2>
            <button
              className={`${styles.checkButton} ${styles.cleanButton}`}
              onClick={props.startGame}
            >
              Play again
            </button>
          </div>
        :
          <div className={styles.quizBottom}>
            <button
              className={`${styles.checkButton} ${styles.cleanButton}`}
              onClick={props.checkAnswers}
            >
              Check answers
            </button>
          </div>
      }
    </div>
  )
}
