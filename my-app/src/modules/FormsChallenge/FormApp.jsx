import FormExampleComponent from './components/FormExampleComponent/FormExampleComponent';
import styles from './FormApp.module.css';

export default function FormApp() {
  return (
    <div className={styles.flexWrapper}>
      <FormExampleComponent />
    </div>
  );
}