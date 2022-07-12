import styles from '../ContactsListApp.module.css';
// import photo from '../assets/mr-whiskerson.png';
import phoneIcon from '../assets/phone-icon.png';
import mailIcon from '../assets/mail-icon.png';

export default function ContactCardComponent(props) {
  return (
    <div className={styles.contactCard}>
      {/* <img className={styles.photo} src={photo} alt="Mr Whiskerson" /> */}
      <img className={styles.photo} src={require(`../assets/${props.imgPath}`)} alt={props.name} />
      <h3>{props.name}</h3>
      <div className={styles.infoGroup}>
        <img className={styles.icon} src={phoneIcon} alt="" />
        <p>{props.phone}</p>
      </div>
      <div className={styles.infoGroup}>
        <img className={styles.icon} src={mailIcon} alt="" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}