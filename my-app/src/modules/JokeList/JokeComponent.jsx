import { useState } from 'react'
import styles from './JokeListApp.module.css'

export default function JokeComponent(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  const [isShown, setIsShown] = useState(false)

  function togglePunchLine() {
    setIsShown(prevState => !prevState)
  }

  return (
      <div>
          {props.setup && <h3>{props.setup}</h3>}
          {isShown && <p>{props.punchline}</p>}
          <button onClick={togglePunchLine}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
          <hr />
      </div>
  )
}