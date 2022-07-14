import styles from '../AirBnbCloneApp.module.css';
import star from '../assets/star.png';

export default function CardComponent(props) {
  const data = props.data;
  let badgeText
  if (data.openSpots === 0) {
      badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
      badgeText = "ONLINE";
  }

  return (
    <section className={styles.card}>
        {badgeText && <div className={styles.cardBadge}>{badgeText}</div>}
        <img className={styles.cardImage} src={require(`../assets/${data.coverImg}`)} alt={data.imgAlt} />
        <div className={styles.cardRating}>
          <img className={styles.cardStars} src={star} alt="stars" />
          <p className={styles.cardInfo}>{data.stats.rating} <span className={styles.textGray}>({data.stats.reviewCount})•{data.location}</span></p>
        </div>
        <p className={styles.cardTitle}>{data.title}</p>
        <p className={styles.cardPricing}><span className={styles.boldText}>From ${data.price}</span> / person</p>
    </section>
  )
}