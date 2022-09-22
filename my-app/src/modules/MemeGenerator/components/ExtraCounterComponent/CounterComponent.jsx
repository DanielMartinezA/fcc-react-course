import styles from './CounterComponent.module.css';
import {useState} from 'react';

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  // Apparently this is bad practice (even though the official documentation uses it in this very example)
  // When the new state depends on the old one, you should pass a function to the setter
  // This function uses the previous state value as a parameter
  // function decreaseCount() {
  //   setCount(count - 1);
  // }
  
  function decreaseCount() {
    setCount(prevCount => prevCount - 1);
  }

  function raiseCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.counter}>
        <button onClick={decreaseCount} className={styles.counterMinus}>-</button>
        <div className={styles.counterCount}>
          <h1>{count}</h1>
        </div>
        <button onClick={raiseCount} type='button' className={styles.counterPlus}>+</button>
      </div>
    </div>
  )
}