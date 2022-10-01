// import FormExampleComponent from './components/FormExampleComponent/FormExampleComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';
import styles from './FormApp.module.css';

export default function FormApp() {
  return (
    <div className={styles.flexWrapper}>
      <SignUpComponent/>
      {/* <FormExampleComponent /> */}
    </div>
  );
}