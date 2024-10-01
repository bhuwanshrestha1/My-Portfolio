import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bhuwan Shrestha</h1>
        <h2>Full-Stack Developer | React & Node.js Enthusiast</h2>
      
        <p className={styles.description}>
          I am a passionate full-stack developer specializing in React and Node.js,
          dedicated to exploring emerging technologies and concepts. 
          With a strong commitment to lifelong learning, I am eager to contribute to innovative projects that push the boundaries of the tech industry. 
          If you're interested in collaboration or learning more about my work, feel free to reach out!
        </p>
        
        {/* Download CV Button */}
        <a 
          href="/assets/Bhuwan-cv.pdf" // Update this path to your actual CV file
          className={styles.contactBtn} 
          download // This attribute prompts the browser to download the file
        >
          Download CV
        </a>
      </div>
      
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
