/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import styles from '../Components/Section_skill/Section_Skills.module.css';
import unityIcon from '../../src/assets/Icon/icons8-unity.svg';
import unityIcon1 from '../../src/assets/Icon/icons8-c-sharp-logo.svg';
import unityIcon2 from '../../src/assets/Icon/icon-1.png';
import unityIcon3 from '../../src/assets/Icon/icons8-css.svg';
import unityIcon4 from '../../src/assets/Icon/icon-3.png';
import unityIcon5 from '../../src/assets/Icon/icons8-c++.svg';
import unityIcon6 from '../../src/assets/Icon/icons8-react-js.svg';
import unityIcon7 from '../../src/assets/Icon/icons8-java.svg';
import unityIcon8 from '../../src/assets/Icon/icons8-c-programming.svg';

// Import the SVG icons as URLs
import leftArrow from '../../src/assets/Icon/line-angle-left-icon (1).svg';
import rightArrow from '../../src/assets/Icon/line-angle-right-icon.svg';
import Section_Project from './Section_Project';
import Section_Contact from './Section_Contact';

const Section_Skills = () => {
  const cardContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      cardContainerRef.current.scrollBy({ left: -355, behavior: 'smooth' });
    } else {
      cardContainerRef.current.scrollBy({ left: 355, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div id="skills" className={styles.Section_Skills}>
      <h1>Skills</h1>

      <div className={styles.Card_div} ref={cardContainerRef}>
      <div className={styles.Arrow1} onClick={() => scroll('left')}>
        <img src={leftArrow} alt="Scroll Left" />
      </div>
        <div className={styles.card}>
          <img src={unityIcon} alt="Unity Icon" />
          <h3>Unity engine</h3>
          <p>Unity engine powers immersive 2D and 3D games across multiple platforms.</p>
          <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon1} alt="C#" />
          <h3>C#</h3>
          <p>C# is a versatile language for developing Windows and web applications.</p>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon6} alt="React JS Icon" />
          <h3>React JS</h3>
          <p>React.js is a JavaScript library for building user interfaces with reusable components efficiently.</p>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon2} alt="HTML 5 Icon" />
          <h3>HTML 5</h3>
          <p>HTML5 structures web content with enhanced multimedia and interactive features.</p>
          <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon3} alt="CSS Icon" />
          <h3>CSS</h3>
          <p>CSS styles web pages, ensuring responsive and visually appealing designs.</p>
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon4} alt="JavaScript Icon" />
          <h3>JavaScript</h3>
          <p>JavaScript enables dynamic content and interactivity on websites and applications.</p>
          <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon5} alt="C++ Icon" />
          <h3>C++</h3>
          <p>C++ provides high-performance capabilities for system software and game development.</p>
          <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon7} alt="Java Icon" />
          <h3>Java</h3>
          <p>Java is a platform-independent language used for building versatile applications.</p>
          <a href="https://java.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.card}>
          <img src={unityIcon8} alt="C Icon" />
          <h3>C</h3>
          <p>C is a general-purpose, procedural programming language known for efficiency and low-level manipulation.</p>
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Read more
          </a>
        </div>
        <div className={styles.Arrow2} onClick={() => scroll('right')}>
        <img src={rightArrow} alt="Scroll Right" />
      </div>
      </div>

    </div>
    </>
  );
};

export default Section_Skills;
