import styles from './ItemListComponent.module.css';
import {useState} from 'react';

export default function ItemListComponent() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addItem() {
    setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
  return (
      <div className={styles.mainContent}>
          <button
            className={styles.addButton}
            type='button'
            onClick={addItem}
          >
            Add Item
          </button>
          {thingsElements}
      </div>
  )
}