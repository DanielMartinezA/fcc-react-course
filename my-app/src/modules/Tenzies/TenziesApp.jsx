import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

import { useEffect, useState } from 'react';
import Die from './components/Die';
import styles from './TenziesApp.module.css';

/*
Extra credit:
 - CSS: put real dots on the dice
 - Track the number of rolls to win the game
 - Add a timer to track the time it took to win the game
 - Save your best time or number of rolls to localStorage
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function TenziesApp() {
  const [diceValues, setDiceValues] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeldAndSame = diceValues.every((die, index, arr) => {
      return die.isHeld && (index === (arr.length - 1) || die.value === arr[index+1].value)
    })
    if (allHeldAndSame) {
      setTenzies(true)
    }
  }, [diceValues])

  function generateNewDice() {
    return {
      value: getRandomInt(1, 7),
      isHeld: false,
      id: nanoid()
    }
  }

  // returns an array of 10 random numbers between 1-6 inclusive.
  function allNewDice() {
    const newDiceValues = []
    for (let i = 0; i < 10; i++) {
      newDiceValues.push(generateNewDice())
    }
    return newDiceValues
  }

  function rollDice() {
    if (!tenzies) {
      setDiceValues(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDice()
      }))
    } else {
      setTenzies(false)
      setDiceValues(allNewDice())
    }
  }

  function holdDice(id) {
    if (!tenzies) {
      setDiceValues(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))
    }
  }

  const diceElements = diceValues.map(dieObject => (
      <Die
          key = {dieObject.id}
          valueObj = {dieObject}
          holdDice = {holdDice}
      />
    ))

  return (
      <main className={styles.mainSection}>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className={styles.diceContainer}>
          {diceElements}
        </div>
        <button
          className={styles.rollBtn}
          onClick={rollDice}
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
  )
}
