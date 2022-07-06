import styles from '../DigitalBusinessCardApp.module.css';

export default function AboutComponent() {
  return (
    <div className={styles.aboutAndInterests}>
      <h2>About</h2>
      <p>
        I am an advanced Mechanical Engineering student, very close to obtaining my degree.
        I have a solid understanding of physics, building models that accurately reflect reality,
        as well as mature skills in problem-solving.
        I am also a Computer Science student with an aptitude for self-learning and a passion for
        new knowledge looking to join a company where I can obtain new skills and help
        develop great software.
      </p>
    </div>
  )
}