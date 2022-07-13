import styles from '../AirBnbCloneApp.module.css';
import star from '../assets/star.png';

export default function CardComponent(props) {
  return (
    <section className={styles.card}>
      <div>
        <img className={styles.cardImage} src={require(`../assets/${props.imgPath}`)} alt={props.imgAlt} />
        <div className={styles.cardRating}>
          <img className={styles.cardStars} src={star} alt="stars" />
          <p className={styles.cardInfo}>{props.rating} <span className={styles.textGray}>({props.reviewCount})•{props.country}</span></p>
        </div>
        <p className={styles.cardTitle}>{props.title}</p>
        <p className={styles.cardPricing}><span className={styles.boldText}>From ${props.price}</span> / person</p>
      </div>
    </section>
  )
}