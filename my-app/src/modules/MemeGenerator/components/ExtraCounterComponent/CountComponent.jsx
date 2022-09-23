import styles from './CounterComponent.module.css';

export default function CountComponent(props) {
  return (
    <div className={styles.counterCount}>
        <h1>{props.number}</h1>
    </div>
  )
}