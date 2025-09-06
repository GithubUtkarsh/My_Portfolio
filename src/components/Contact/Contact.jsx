import React from "react";
import styles from "./Contact.module.css";
// import githubIcon from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
// import gmailIcon from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg";
// import LinkedInIcon from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"https://cdn.simpleicons.org/gmail"} alt="Email icon" />
          <a href="mailto:kumarutkarsh273@email.com">kumarutkarsh273@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/utkarsh-kumar-4075a5267/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img className={styles.githubWhite} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} alt="Github icon" />
          <a href="https://github.com/GithubUtkarsh">Github</a>
        </li>
      </ul>
    </footer>
  );
};
