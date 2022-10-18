import styles from '../MemeGeneratorApp.module.css';
import memeImage from '../assets/meme-img1.jpg'
// import memesData from '../assets/memesData' // maybe use it as a fallback in case the fetch fails?
import {useState, useEffect} from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function MainComponent() {
  const [allMemes, setAllMemes] = useState([]);
  
  useEffect(() => {
    // fetch meme data from api
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  // Since the function passed in to useEffect uses it's return as a cleanup function, you can't define it as an async,
  // as that returns a promise. To use async and await, you can define an async function within the body of the one passed in to useEffect
  // to handle the required operations and then call it. Thus, you can still use a return that works as a cleanup function.
  
  // useEffect(() => {
  //   async function getMemes() {
  //     const res = await fetch("https://api.imgflip.com/get_memes")
  //     const data = await res.json()
  //     setAllMemes(data.data.memes)
  //   }
  //   getMemes()
  //   // optional return of cleanup function
  // }, [])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memeImage
  });

  function getMemeImage() {
    const index = getRandomInt(0, allMemes.length);
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemes[index].url
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