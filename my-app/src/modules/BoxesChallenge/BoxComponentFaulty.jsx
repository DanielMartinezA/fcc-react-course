import { useState } from 'react';
import styles from './BoxesApp.module.css';

// This box component uses a local state.
// The inital value for the state is passed on from the parent through props (something called 'derived state').
// However, the boxes array in BoxesApp already presented a way to tell if a box was on or not.
// The boxes on this array were not updated when a box was clicked on.
// This decouples the semantics of the local state and the one in boxes, presenting two sources of truth.
// This article talks about the use of derived state and the bugs it can produce:
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

export default function BoxComponentFaulty(props) {
  const [on, setOn] = useState(props.on)

  const inLineStyles = {
    backgroundColor: on ? "#222222" : "transparent"
  }

  function toggle() {
    setOn(prevState => !prevState)
  }

  return (
    <div style={inLineStyles} className={styles.box} onClick={toggle}></div>
  )
}