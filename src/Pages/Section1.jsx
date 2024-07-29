/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styles from '../Components/Section1/Section1.module.css';
import profileImage from '../../src/assets/image/MicrosoftTeams-image (2).png'; // Adjusted filename
import Social_follow from '../Components/Section1/Social_follow';
import Section_Skills from './Section_Skills';
import Section_Project from './Section_Project';
import Section_Contact from './Section_Contact';

const Section1 = () => {
  const [isContainer1Visible, setIsContainer1Visible] = useState(false);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainer1Visible(true);
          observer.unobserve(container1Ref.current);
        }
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );

    if (container1Ref.current) {
      observer.observe(container1Ref.current);
    }

    return () => {
      if (container1Ref.current) {
        observer.unobserve(container1Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div id='about' className={styles.Section1}>
        <div
          className={`${styles.container1} ${isContainer1Visible ? styles.rollFromLeft : ''}`}
          ref={container1Ref}
        >
          <img src={profileImage} alt="Profil" />
        </div>
        <div
          className={`${styles.container2} ${isContainer1Visible ? styles.visible : ''}`}
          ref={container2Ref}
        >
          <h1>About Rithik</h1>
          <p>
            As a passionate developer born and raised in Kerala, I thrive on innovation and problem-solving. My journey in tech is fueled by a competitive spirit, strong leadership, and an unwavering work ethic. With a logical mind and creative approach, I continuously push the boundaries to deliver exceptional solutions.<br /> <br />Beyond the screen, I find inspiration in football and chess, where strategy and precision mirror my approach to development. Let's connect and create something remarkable together!
          </p>
          <Social_follow />
          <button className={styles.downloadCv}>
            <a href="https://drive.google.com/file/d/12ZHmtScVnG2m7KKALLvt-zx71Az5jlRj/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Section1;
