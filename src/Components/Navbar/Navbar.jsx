/* eslint-disable no-unused-vars */
  import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scrolling smooth
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <span onClick={scrollToTop} className={styles.name}>
          Rithik Ramachandran
        </span>
        <button className={`${styles.menu__icon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Original navigation list, hidden on small screens */}
        <ul className={styles.nav__item}>
          <li><Link to="/">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger menu list, shown on small screens when menu is open */}
        {isOpen && (
          <ul className={styles.hamburgerMenu}>
            <li><Link to="/" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/project" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
