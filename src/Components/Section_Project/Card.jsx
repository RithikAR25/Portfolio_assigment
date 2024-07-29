/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Card.js
import React from "react";
import styles from "./Card.module.css"; // Import the CSS module

function Card({ imgSrc, linkHref, heading, description }) {
  return (
    <div className={styles.card}>
      <img
        src={imgSrc} // Use the image source from props
        alt={heading} // Use the heading as the alt text
      />
      <div className={styles["card-content"]}>
        <h2>{heading}</h2> {/* Use the heading from props */}
        <p>{description}</p> {/* Use the description from props */}
        <a href={linkHref} className={styles.button}> {/* Use the link href from props */}
          Git link
        </a>
      </div>
    </div>
  );
}

export default Card;
