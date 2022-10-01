import { useState } from "react"

import styles from './SignUpComponent.module.css'

export default function SignUpComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: false
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
      if (formData.joinedNewsletter) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("Passwords do not match");
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.formInput}
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className={styles.formInput}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          className={styles.formInput}
          type="password"
          name="passwordConfirm"
          placeholder="Confirm password"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className={styles.formMarketing}>
          <input
            type="checkbox"
            name="joinedNewsletter"
            id="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="joinedNewsletter">I want to join the newsletter</label>
        </div>

        <button className={styles.formSubmit}>
          Sign up
        </button>
      </form>
    </div>
  )
}