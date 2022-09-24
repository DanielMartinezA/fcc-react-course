import styles from './BoxesApp.module.css';

export default function BoxComponent(props) {

  const inLineStyles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div
      style={inLineStyles}
      className={styles.box}
      onClick={() => props.toggle(props.id)}
    >
    </div>
  )
}