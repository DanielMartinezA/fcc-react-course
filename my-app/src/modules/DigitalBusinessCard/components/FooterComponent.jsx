import styles from '../DigitalBusinessCardApp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <a href="https://twitter.com/" className={styles.socialsLink}>
          <FontAwesomeIcon icon={faTwitterSquare} color="#918E9B" size="xl"/>
      </a>
      <a href="https://facebook.com/" className={styles.socialsLink}>
          <FontAwesomeIcon icon={faFacebookSquare} color="#918E9B" size="xl"/>
      </a>
      <a href="https://instagram.com/" className={styles.socialsLink}>
          <FontAwesomeIcon icon={faInstagramSquare} color="#918E9B" size="xl"/>
      </a>
      <a href="https://github.com/" className={styles.socialsLink}>
          <FontAwesomeIcon icon={faGithubSquare} color="#918E9B" size="xl"/>
      </a>
    </div>
  )
}