/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import styles from '../Components/Section_Project/Section_Project.module.css';
import Card from '../Components/Section_Project/Card';
import gameImage from '../../src/assets/image/images34 (2).jpg';
import gameImage2 from '../../src/assets/image/dataset-cover.jpg';
import gameImage3 from '../../src/assets/image/abstract-digital-art-minimalism-simple-background-wallpaper-preview.jpg';
import gameImage4 from '../../src/assets/image/360_F_434292902_5e5dFMkx6TfjRBDoJXqRyiNShhQ07RY2.jpg';
import gameImage5 from '../../src/assets/image/project-tracking-goal-tracker-task-completion-checklist-to-remind-progress-concept-businessman-manager-holding-big-pencil-check-259091771.webp'
import gameImage6 from '../../src/assets/image/1520091921488.jpg';
// Import the SVG icons as URLs
import leftArrow from '../../src/assets/Icon/arrow-thin-chevron-left-icon.svg';
import rightArrow from '../../src/assets/Icon/arrow-thin-chevron-right-icon.svg';
import Section_Contact from './Section_Contact';

const Section_Project = () => {
  // Reference to the card container for scrolling
  const cardContainerRef = useRef(null);

  // Scroll function to scroll left or right
  const scroll = (direction) => {
    if (direction === 'left') {
      cardContainerRef.current.scrollBy({ left: -272, behavior: 'smooth' });
    } else {
      cardContainerRef.current.scrollBy({ left: 272, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div id="project" className={styles.Section_Project}>
      <h1>Projects</h1>
      <div className={styles.Card_div} ref={cardContainerRef}>
        {/* Left Arrow */}
        <div className={styles.Arrow1} onClick={() => scroll('left')}>
          <img src={leftArrow} alt="Scroll Left" />
        </div>

        {/* Project Cards */}
        <Card
          imgSrc={gameImage}
          linkHref="https://github.com/RithikAR25/Ball-Roll-2"
          heading="Ball Roll 2"
          description="3D game made with Unity"
        />
        <Card
          imgSrc={gameImage2}
          linkHref=""
          heading="Disease prediction app"
          description="Predict disease via introduction through chat bot"
        />
        <Card
          imgSrc={gameImage3}
          linkHref="https://github.com/RithikAR25/Ball-Roll-2"
          heading="Image Generation"
          description="Automatically generate image based on the description given through text input"
        />
         <Card
          imgSrc={gameImage4}
          linkHref="https://github.com/Emma-Theresa/MindDuel.git"
          heading="Mind Duel"
          description="Web game using HTML,CSS and JS"
        />
         <Card
          imgSrc={gameImage5}
          linkHref="https://github.com/pioneerstealth/TaskTrace.git"
          heading="Task Trace"
          description="web application for tutors that analyzes the performance of different batches and individual students"
        />
         <Card
          imgSrc={gameImage6}
          linkHref="https://github.com/RithikAR25/HTML-CSS_GG-Hospital.git"
          heading="Web site clone"
          description="Web site clone using HTML,CSS"
        />


        {/* Right Arrow */}
        <div className={styles.Arrow2} onClick={() => scroll('right')}>
          <img src={rightArrow} alt="Scroll Right" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Section_Project;