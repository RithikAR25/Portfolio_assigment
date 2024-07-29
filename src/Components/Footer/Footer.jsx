/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Footer.module.css';
import { GoMoveToTop } from "react-icons/go";



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  return (
    <>
    <div  className={styles.Container}></div>
        <footer className={styles.footer}>
      {/* <div className={styles.footer__parralax}>
        <div className={styles.footer__parralax_trees}></div>
        <div className={styles.footer__parralax_moto}></div>
        <div className={styles.footer__parralax_secondplan}></div>
        <div className={styles.footer__parralax_premierplan}></div>
        <div className={styles.footer__parralax_voiture}></div>
      </div> */}
      <div className={styles.Container2}>
    <p>© Rithik Ramachandran</p>
    {/* <button onClick={scrollToTop} className={styles.scrollToTopButton}>Scroll to Top</button> */}
    <GoMoveToTop onClick={scrollToTop} className={styles.scrollToTopButton}/>
    </div>


    </footer>
    </>

  );
};

export default Footer;
