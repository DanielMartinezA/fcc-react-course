import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import sampleData from './assets/sampleData'
import { useState } from 'react';
import {nanoid} from 'nanoid'

import styles from './QuizzicalTriviaApp.module.css';

function shuffleArrayFY(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i+1))
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}

export default function QuizzicalTriviaApp() {
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [results, setResults] = useState({isFinished: false, score: 0})

  // returns an array of questions, or [] if data.response_code !== 0
  // question = {key : string, questionText : string, correctAnswer : {key, value}, options : [...{key, value}]}
  function parseData(data) {
    let parsedData = []
    if (data.response_code === 0) {
      parsedData = data.results.map(questionData => {
        const correctAnswer = {key: nanoid(), value: decodeURIComponent(questionData.correct_answer)}
        const incorrectAnswers = questionData.incorrect_answers.map(
          elem => ({key: nanoid(), value: decodeURIComponent(elem)})
        )
        return {
          key: nanoid(),
          questionText: decodeURIComponent(questionData.question),
          correctAnswer: correctAnswer,
          options: shuffleArrayFY([...incorrectAnswers, correctAnswer])
        }
      })

    }
    return parsedData
  }

  function startGame() {
    const questionsQty = 'amount=5'
    const questionsCategory = 'category=15'
    const questionsDifficulty = 'difficulty=easy'
    const url = 'https://opentdb.com/api.php?' +
      questionsQty + '&' +
      questionsCategory + '&' +
      questionsDifficulty +
      '&encode=url3986'

    const useSample = false
    
    if (useSample) {
      const parsedData = parseData(sampleData)
      setQuestions(parsedData)
      setAnswers(parsedData.reduce((acc, question) => {
        return {...acc, [question.key]: ""}
      }, {}))
      setResults({isFinished: false, score: 0})
    } else {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const parsedData = parseData(data)
          setQuestions(parsedData)
          // initialize answers as an object of question_key: answer_key
          setAnswers(parsedData.reduce((acc, question) => {
            return {...acc, [question.key]: ""}
          }, {}))
          setResults({isFinished: false, score: 0})
        })
        .catch(err => {
            console.log(`error ${err}`)
            console.log('using sample data.');
            const parsedData = parseData(sampleData)
            setQuestions(parsedData)
            setAnswers(parsedData.reduce((acc, question) => {
              return {...acc, [question.key]: ""}
            }, {}))
            setResults({isFinished: false, score: 0})
        });
    }
  }

  // Sets optionId as the answer to the question with questionId, or "" if that was already the case.
  function handleSelection(questionId, optionId) {
    if (!results.isFinished) {
      setAnswers(prevAnswers => {
        return {
          ...prevAnswers,
          [questionId]: prevAnswers[questionId] === optionId ? "" : optionId
        }
      })
    }
  }

  function checkAnswers() {
    console.log("Checking answers");

    let totalScore = 0
    questions.forEach(question => {
      if (question.correctAnswer.key === answers[question.key]) {
        totalScore += 1
      }
    })
    setResults({isFinished: true, score: totalScore})
  }

  return (
    <div className={styles.flexWrapper}>
      {
        questions && questions.length > 0 ?
          <QuizComponent
            questions={questions}
            answers={answers}
            results={results}
            handleSelection={handleSelection}
            checkAnswers={checkAnswers}
            startGame={startGame}
          />
        :
          <HomeComponent startGame={startGame}/>
      }
    </div>
  );
}