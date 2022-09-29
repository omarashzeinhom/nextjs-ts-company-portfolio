import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header, HomeCards, Nav } from './components'

const Home: NextPage = () => {
  return (
    <>
        <Nav/>

    <div className={styles.container}>
   <Header/>
<HomeCards/>
     
      
    </div>
    </>

  )
}

export default Home
