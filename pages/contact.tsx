import React from 'react'
import { Header, Nav } from './components'
import styles from '../styles/Home.module.css';

const contact = () => {
  return (
    <>
      <Header />
      <Nav />
      <h1>Contact</h1>
      <div className={styles.grid}>
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input name="name" className="input" type="text" placeholder="Enter Name Here ..." />
          </div>
          <p className="help"><em>Example:</em>John Doe</p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input name="email" className="input" type="text" placeholder="Enter Name Here ..." />
          </div>
          <p className="help"><em>Example:</em>johndoe12345@gmail.com</p>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea name="message" className="input" placeholder="Enter Message Here ..." style={{ resize: "none", paddingBottom: "7rem" }} />
          </div>
          <p className="help"><em>Example:</em>What do you plan on doing in the future?</p>
        </div>
        <div className="control">
  <button className="button is-primary">Submit</button>
</div>
      </form>
      </div>
    </>
  )
}

export default contact
