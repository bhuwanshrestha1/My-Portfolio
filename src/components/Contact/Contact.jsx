import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shresthabhuwan016@gmail.com">shresthabhuwan016@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bhuwan-shrestha-178109271/">https://www.linkedin.com/in/bhuwan-shrestha-178109271/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Phone icon" />
          <a href="https://github.com/bhuwanshrestha1">https://github.com/bhuwanshrestha1</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="Github icon" />
          <a href="callto:+977-9805466664">+977-9805466664</a>
        </li>
      </ul>
    </footer>
  );
};
