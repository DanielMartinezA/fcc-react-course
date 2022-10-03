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
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemeImages.data.memes[index].url
      }
    });
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main className={styles.mainContent}>
      <form action="">
        <div className={styles.inputFields}>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button
          type='button'
          className={styles.submitButton}
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className={styles.meme}>
        <img className={styles.memeImg} src={meme.randomImage === "" ? memeImage : meme.randomImage} alt="Random Meme" />
        <h2 className={`${styles.memeText} ${styles.topMemeText}`}>{meme.topText}</h2>
        <h2 className={`${styles.memeText} ${styles.bottomMemeText}`}>{meme.bottomText}</h2>
      </div>
    </main>
  )
}