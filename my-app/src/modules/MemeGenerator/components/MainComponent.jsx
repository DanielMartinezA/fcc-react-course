import styles from '../MemeGeneratorApp.module.css';
import meme from '../assets/meme-img.png'
import memesData from '../assets/memesData'
import {useState} from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function MainComponent() {
  const [imgUrl, setImgUrl] = useState(memesData.data.memes[0].url);

  function getMemeImage() {
    const index = getRandomInt(0, memesData.data.memes.length);
    setImgUrl(memesData.data.memes[index].url);
  }

  return (
    <main className={styles.mainContent}>
      <form action="">
        <div className={styles.inputFields}>
          <input type="text" value={"Shut up"}/>
          <input type="text" value={"and take my money"}/>
        </div>
        <button
          type='button'
          className={styles.submitButton}
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className={styles.upperMemeText}></div>
      <div className={styles.lowerMemeText}></div>
      <img className={styles.memeImg} src={imgUrl === "" ? meme : imgUrl} alt="Random Meme" />
    </main>
  )
}