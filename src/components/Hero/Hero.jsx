import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.jpg"
import Typed from 'typed.js';

export const Hero = () => {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>MERN Full Stack</i> ','FrontEnd Developer','BackEnd Developer'],
      typeSpeed: 50,
      backSpeed:30,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Utkarsh</h1>
        <div className={styles.animated_text}>
          <span ref={el} />
        </div>
        <p className={styles.description}>
          I love building clean and user-friendly websites. I enjoy working on both the front-end and back-end to deliver complete web solutions.
        </p>
        <a href="mailto:kumarutkarsh273@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={heroImage}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
