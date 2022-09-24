import styles from './BoxesApp.module.css';
import { useState } from 'react';
// import BoxComponentFaulty from './BoxComponentFaulty';
import BoxComponent from './BoxComponent';

import boxes from './assets/boxes';

export default function BoxesApp() {
  const [allBoxes, setAllBoxes] = useState(boxes)

  function toggle(id) {
    setAllBoxes(prevState => {
      return prevState.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }

  const boxElements = allBoxes.map(data => {
    return (
      // <BoxComponentFaulty on={data.on} key={data.id}/>
      // key can't be used as id since it's a special attribute
      <BoxComponent
        key={data.id}
        id={data.id}
        on={data.on}
        toggle={toggle}
      />
    )
  })

  return (
    <main className={styles.flexWrapper}>
      <h1>Boxes will go here</h1>
      {boxElements}
    </main>
  );
}