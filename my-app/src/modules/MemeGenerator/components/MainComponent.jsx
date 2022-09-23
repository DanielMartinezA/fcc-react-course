import styles from '../MemeGeneratorApp.module.css';
import memeImage from '../assets/meme-img.png'
import memesData from '../assets/memesData'
import {useState} from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function MainComponent() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.memes[30].url
  });

  function getMemeImage() {
    const index = getRandomInt(0, allMemeImages.data.memes.length);
    setMeme(previousMeme => {
      return {
        ...previousMeme,
        randomImage: allMemeImages.data.memes[index].url
      }
    });
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
      <img className={styles.memeImg} src={meme.randomImage === "" ? memeImage : meme.randomImage} alt="Random Meme" />
    </main>
  )
}