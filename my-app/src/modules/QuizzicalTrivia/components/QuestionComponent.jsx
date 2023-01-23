import styles from '../QuizzicalTriviaApp.module.css';
/*
https://nextjs.org/learn/foundations/about-nextjs
https://beta.reactjs.org/learn/start-a-new-react-project#building-with-a-full-featured-framework
https://beta.reactjs.org/learn/thinking-in-react#step-3-find-the-minimal-but-complete-representation-of-ui-state
https://beta.reactjs.org/learn/you-might-not-need-an-effect
*/

export default function QuestionComponent(props) {

  const options = props.options.map(option => {
    const isSelected = option.key === props.answer
    const isRight = option.key === props.correctAnswer.key
    const isFinished = props.isFinished

    let buttonStyle = ""

    if (isFinished && isRight) {
      buttonStyle = styles.optionButtonRightAnswer
    } else if (isFinished && !isRight && isSelected) {
      buttonStyle = styles.optionButtonWrongAnswer
    } else if (!isFinished && isSelected) {
      buttonStyle = styles.optionButtonSelected
    }

    if (isFinished && !isRight) {
      buttonStyle += ` ${styles.optionButtonFaded}`
    }

    return (
      <button
        className={`${styles.optionButton} ${styles.cleanButton} ${buttonStyle}`}
        key={option.key}
        onClick={() => props.handleSelection(props.idValue, option.key)}
      >
        {option.value}
      </button>
  )})

  return (
    <div className={styles.questionComponent}>
      <h1 className={styles.questionText}>
        {props.questionText}
      </h1>
      <div className={styles.options}>
        {options}
      </div>
    </div>
  )
}
