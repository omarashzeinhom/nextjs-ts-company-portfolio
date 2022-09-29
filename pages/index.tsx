import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, Header, HomeCards, Nav } from './components'

const Home: NextPage = () => {
  return (
    <>
      <Nav />

      <div className={styles.container}>
        <Header />
        <HomeCards />

        <Footer />
      </div>
    </>

  )
}

export default Home
