import React from 'react'
import { Header,  Nav } from './components'
import styles from '../styles/Home.module.css';

const About = () => {
  return (
   <>
<Header/>
<Nav/>
<h1>About</h1>
<div className="card">
        <div className="card-content">
          <p className={styles.description}>
            AG🛡️™ Is a script available for Windows Mac and Linux , that Designed to block Access to Adult Industry Websites Utilizing /etc/hosts & /etc/resolv.conf files ..
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            ANDGOEDU
          </p>
        </footer>
      </div>
   </>
  )
}

export default About
