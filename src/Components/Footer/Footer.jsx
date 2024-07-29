/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Footer.module.css';



const Footer = () => {


  
  return (
    <>
    <div  className={styles.Container}></div>
        <footer className={styles.footer}>
      <div className={styles.footer__parralax}>
        <div className={styles.footer__parralax_trees}></div>
        <div className={styles.footer__parralax_moto}></div>
        <div className={styles.footer__parralax_secondplan}></div>
        <div className={styles.footer__parralax_premierplan}></div>
        <div className={styles.footer__parralax_voiture}></div>
      </div>


    </footer>
    </>

  );
};

export default Footer;
