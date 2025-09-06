import React from "react";

import styles from "./About.module.css";
import cursorIcon from "../../assets/about/cursorIcon.png";
import aboutImage from "../../assets/about/aboutImage.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  return (
    <div className={styles.body}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursorIcon} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={serverIcon} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
          </ul>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </section>
    </div>
  );
};
