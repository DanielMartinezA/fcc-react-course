import styles from '../TravelJournalApp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';

export default function CardComponent(props) {
  const hasBorder = props.id !== props.listLength;
  return (
    <section className={`${styles.card} ${hasBorder ? styles.cardBorder : ""}`}>
        <img className={styles.cardImage} src={props.data.imageUrl} alt={props.data.imageAlt} />
        <section className={styles.cardInfo}>
          <div>
            <FontAwesomeIcon icon={faLocationDot} color="#F55A5A" size="xs"/>
            <span className={styles.location}>{props.data.location.toUpperCase()}</span>
            <a className={styles.mapLink} href={props.data.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className={styles.title}>{props.data.title}</h1>
          <span className={styles.period}>{props.data.startDate} - {props.data.endDate}</span>
          <p className={styles.description}>{props.data.description}</p>
        </section>
    </section>
  )
}