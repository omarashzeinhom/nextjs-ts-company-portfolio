import React from 'react'
import styles from '../../../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/omarashzeinhom"
        target="_blank"
        rel="noopener noreferrer"
      >
        ©OmarZeinhom 2022-2023 ANDGOEDU™{' '}
        <span className={styles.logo}>

        </span>
      </a>
    </footer>
  )
}

export default Footer
