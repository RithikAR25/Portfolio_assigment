/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../Footer/Main_Footer.module.css'
import { GoMoveToTop } from "react-icons/go";

const Main_Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
  return (
    <div className={styles.Container2}>
    <p>© Rithik Ramachandran</p>
    {/* <button onClick={scrollToTop} className={styles.scrollToTopButton}>Scroll to Top</button> */}
    <GoMoveToTop onClick={scrollToTop} className={styles.scrollToTopButton}/>
    </div>
  )
}

export default Main_Footer