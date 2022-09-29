import React from 'react'
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

const HomeCards = () => {















  return (
    <main className={styles.main}>

      <h1 className={styles.title}>
        🔞🛡️AG Shield™
        
      </h1>
      <h2 className={styles.title}> <Link
          href="/downloads"
          
        >Download &rarr;   </Link></h2>
      <hr className="navbar-divider" />

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

      <div className={styles.grid}>




        <div className={styles.card}>
          <h2> <Link
            href="/contact"
          >Contact &rarr;   </Link></h2>
          <p>Contact the main developers to and ask us your questions</p>


        </div>

        <div className={styles.card}>
          <h2> <Link
            href="/downloads"
            className={styles.card}
          >Download &rarr;        </Link></h2>
          <p>
            Available For Windows , Mac , Linux , Android and IOS are still in development.
          </p>
        </div>



        <div className={styles.card}>

          <h2>        <Link href="https://github.com/omarashzeinhom/BlockAG--Block-Adult-Gambling-Websites-Windows-Mac-Linux/tree/contributions" className={styles.card} target="_blank">
            Contribute &rarr;  </Link></h2>
          <p>Contribute to the Project By Adding the code you want to the public git repository</p>
        </div>

      </div>



    </main>

  )
}

export default HomeCards
