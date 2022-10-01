import { useState } from "react"

import styles from './FormExampleComponent.module.css'

export default function FormExampleComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: ""
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
    event.preventDefault() // prevents refreshing the page and adding the queries to the url
    console.log(formData);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
          />
          <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
          />
          <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
          />
          Comments:
          <textarea
            rows="3"
            name="comments"
            onChange={handleChange}
            value={formData.comments}
          />
          <input
            type="checkbox"
            id="isFriendly"
            name="isFriendly"
            onChange={handleChange}
            checked={formData.isFriendly}
          />
          <label htmlFor="isFriendly">Are you friendly?</label>
          <br />
          <br />

          <fieldset>
            <legend>Current employment status</legend>

            <input
              type="radio"
              id="unemployed"
              name="employment"
              onChange={handleChange}
              value="unemployed"
              checked={formData.employment === "unemployed"}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
              type="radio"
              id="part-time"
              name="employment"
              onChange={handleChange}
              value="part-time"
              checked={formData.employment === "part-time"}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
              type="radio"
              id="full-time"
              name="employment"
              onChange={handleChange}
              value="full-time"
              checked={formData.employment === "full-time"}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
          </fieldset>
          <br />

          <label htmlFor="favColor">What is you favorite color?</label>
          <br />
          <select
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
          <br />
          <br />
          <button>Submit</button>
      </form>
    </div>
  )
}
