import jokesData from './assets/jokesData'
import styles from './JokeListApp.module.css'

import JokeComponent from './JokeComponent'

export default function JokeListApp() {
  const jokeElements = jokesData.map(joke => {
      return (
          <JokeComponent 
              key={joke.id}
              setup={joke.setup} 
              punchline={joke.punchline} 
          />
      )
  })
  
  return (
      <div className={styles.main}>
          {jokeElements}
      </div>
  )
}