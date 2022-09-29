import React from 'react'
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

const HomeCards = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        🛡️🔞🎰AG Shield <Link href="/downloads">Download
        </Link>
      </h1>
      <p className={styles.description}>
      🛡️ Is a script available for Windows Mac and Linux Designed to block Access to Adult Industry Websites Utilizing /etc/hosts & /etc/resolv.conf files ..
      </p>

      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Find in-depth information about the script developers and story</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Contribute &rarr;</h2>
          <p>Contribute to the Project By Adding the code you want to the public git repository</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>Contact &rarr;</h2>
          <p>Contact the main developers to and ask us your questions</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>Download &rarr;</h2>
          <p>
            Available For Windows , Mac , Linux , Android and IOS are still in development.
          </p>
        </a>
      </div>
    </main>

  )
}

export default HomeCards
