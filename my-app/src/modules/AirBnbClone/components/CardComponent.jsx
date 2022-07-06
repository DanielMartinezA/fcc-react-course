import styles from '../AirBnbCloneApp.module.css';
import star from '../assets/star.png';
import eventPhoto from '../assets/katie-zaferes.png';

export default function CardComponent() {
  return (
    <section className={styles.card}>
      <div>
        <img className={styles.cardImage} src={eventPhoto} alt="Katie Zaferes" />
        <div className={styles.cardRating}>
          <img className={styles.cardStars} src={star} alt="stars" />
          <p className={styles.cardInfo}>5.0 <span className={styles.textGray}>(6)•USA</span></p>
        </div>
        <p className={styles.cardTitle}>Life lessons with Katie Zaferes</p>
        <p className={styles.cardPricing}><span className={styles.boldText}>From $136</span> / person</p>
      </div>
    </section>
  )
}