import styles from '../TenziesApp.module.css';

export default function Die(props) {
    
    return (
        <div
          className={`${styles.die} ${props.valueObj.isHeld ? styles.dieIsHeld : ""}`}
          onClick={() => props.holdDice(props.valueObj.id)}
        >
          <h2 className={styles.dieValue}>{props.valueObj.value}</h2>
        </div>
    )
}
