import styles from '../MemeGeneratorApp.module.css';
import meme from '../assets/meme-img.png'

export default function MainComponent() {
  return (
    <main className={styles.mainContent}>
      <form action="">
        <div className={styles.inputFields}>
          <input type="text" value={"Shut up"}/>
          <input type="text" value={"and take my money"}/>
        </div>
        <button className={styles.submitButton}>Get a new meme image 🖼</button>
      </form>
      <div className={styles.upperMemeText}></div>
      <div className={styles.lowerMemeText}></div>
      <img className={styles.memeImg} src={meme} alt="Random Meme" />
    </main>
  )
}