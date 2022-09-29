import React from 'react'
import { Header, Nav } from './components'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Downloads = () => {

  const Downloads = [
    
    {
      os: "Windows",
      filelink: "https://github.com/omarashzeinhom/BlockAG--Block-Adult-Gambling-Websites-Windows-Mac-Linux/releases/download/BlockAGWindows/AG.Shield.Windows.zip",
      version: "1.0.1"
    },

    {
      os: "Linux",
      filelink: "https://github.com/omarashzeinhom/BlockAG--Block-Adult-Gambling-Websites-Windows-Mac-Linux/releases/download/BlockAGWindows/AgshieldLinux.zip",
      version: "1.0.0"

    },

    {
      os: "Mac",
      filelink: "https://github.com/omarashzeinhom/BlockAG--Block-Adult-Gambling-Websites-Windows-Mac-Linux/releases/download/BlockAGWindows/AgshieldMac.zip",
      version: "1.0.0"

    },
  ];


  return (
    <>
      <Header />
      <Nav />
      <div className={styles.grid}>
        <h1>Downloads</h1>
        {Downloads.map((download: any, index) => (

    
          <div className={styles.card} key={download + index}>
          <a 
              href={download?.filelink}
              target="_blank"	
            >          {download?.os}
              </a>
              <br/>
              <small>Version:<em>{download?.version}</em></small>
          </div>
   
        ))}

      </div>
    </>
  )
}

export default Downloads;
