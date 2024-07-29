/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scrolling smooth
    });
  };

  return (
    <>
        <nav className={styles.Navbar}>
            <span onClick={scrollToTop} className={styles.name}>
              Rithik Ramachandran
            </span>
            <ul className={styles.nav__item}>
                <li className={styles.nav__item}> <Link to="/">About</Link></li>
                <li className={styles.nav__item}><Link to="/skills">Skills</Link></li>
                <li className={styles.nav__item}><Link to="/project">Projects</Link></li>
                <li className={styles.nav__item}><Link to="/contact">Contact</Link></li>

            </ul>
        </nav>
    </>
  )
}

export default Navbar
