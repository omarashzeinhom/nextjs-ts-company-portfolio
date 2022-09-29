import React from 'react'
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

const HomeCards = () => {
  return (
    <main className={styles.main}>

      <h1 className={styles.title}>
        🛡️🔞🎰AG Shield™ <Link href="/downloads">Download
        </Link>
      </h1>
      <hr className="navbar-divider" />

      <div className="card">
        <div className="card-content">
          <p className={styles.description}>
            "AG🛡️™ Is a script available for Windows Mac and Linux , that Designed to block Access to Adult Industry Websites Utilizing /etc/hosts & /etc/resolv.conf files .."
          </p>

          <p className="subtitle">
            ANDGOEDU
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

      <div className={styles.grid}>

        <a
          href="/blog"
          className={styles.card}
        >
          <h2>Blog &rarr;</h2>
          <p>
            CheckOut our latest blog posts!!!
          </p>
        </a>

        <a
          href="/docs"
          className={styles.card}
        >
          <h2>Docs &rarr;</h2>
          <p>
            Checkout the installation docs
          </p>
        </a>
        
        <a
          href="/contact"
          className={styles.card}
        >
          <h2>Contact &rarr;</h2>
          <p>Contact the main developers to and ask us your questions</p>
        </a>

        <a
          href="/downloads"
          className={styles.card}
        >
          <h2>Download &rarr;</h2>
          <p>
            Available For Windows , Mac , Linux , Android and IOS are still in development.
          </p>
        </a>


        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Contribute &rarr;</h2>
          <p>Contribute to the Project By Adding the code you want to the public git repository</p>
        </a>

   


        <a href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Find in-depth information about the script developers and story</p>
        </a>

      </div>



    </main>

  )
}

export default HomeCards
