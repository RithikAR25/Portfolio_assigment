/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Social_follow.module.css';

// Import images
import instagramIcon from '../../assets/Icon/instagram-socials-social-media-icon-svgrepo-com.svg';
import twitterIcon from '../../assets/Icon/tweet-twitter-twitter-icon-svgrepo-com.svg';
import snapchatIcon from '../../assets/Icon/snapchat-social-social-media-icon-svgrepo-com.svg';
import linkedinIcon from '../../assets/Icon/linkedin-socials-social-media-icon-svgrepo-com.svg';
import pinterestIcon from '../../assets/Icon/pin-pin-pinterest-icon-svgrepo-com.svg';

const Social_follow = () => {
  return (
    <div className={styles.Follow}>
      <p>Follow me</p>
      <ul className={styles.socialList}>
        <li id={styles.a1}><a  href="https://www.instagram.com/rithik_ramachandran_?igsh=MW9vdDVwMXRtbXlycw==#" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a></li>
        <li id={styles.a2}><a  href="https://x.com/search-advanced" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" /></a></li>
        <li id={styles.a3}><a  href="https://www.snapchat.com/add/rithikar7?share_id=89voHbARuxE&locale=en-US" target="_blank" rel="noopener noreferrer"><img src={snapchatIcon} alt="Snapchat" /></a></li>
        <li id={styles.a4}><a  href="https://www.linkedin.com/in/rithik-ramachandran-312698316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
        <li id={styles.a5}><a  href="http://pinterest.com" target="_blank" rel="noopener noreferrer"><img src={pinterestIcon} alt="Pinterest" /></a></li>
      </ul>
    </div>
  );
};

export default Social_follow;