import styles from '../DigitalBusinessCardApp.module.css';
import photo from '../assets/profile-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function InfoComponent() {
  return (
    <div className={styles.info}>
      <img className={styles.photo} src={photo} alt="Daniel Martinez" />
      <h1 className={styles.name}>Daniel Martinez</h1>
      <h2 className={styles.title}>Software Engineer</h2>
      <h2 className={styles.address}>daniel.martinez</h2>
      <div className={styles.buttons}>
        <button className={styles.emailButton}>
          <FontAwesomeIcon icon={faEnvelope} color="#1E1F26" />
          <span>Email</span>
        </button>
        <button className={styles.linkedinButton}>
          <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF"/>
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  )
}