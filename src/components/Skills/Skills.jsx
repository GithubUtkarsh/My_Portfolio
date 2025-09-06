import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div
              key={id}
              className={`${styles.skill} ${hoveredSkill === id ? styles.skillHover : ""
                }`}
              onMouseEnter={() => setHoveredSkill(id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`${styles.skillImageContainer} ${hoveredSkill === id ? styles.skillImageContainerHover : ""
                  }`}
              >
                <img
                  src={skill.imageSrc}
                  alt={skill.title}
                  className={`${styles.skillImage} ${hoveredSkill === id ? styles.skillImageHover : ""}
                   ${(skill.title === "GitHub" || skill.title === "Express") ? styles.expressWhite : ""}`}
                />
              </div>
              {/* <p
                className={`${styles.skillTitle} ${hoveredSkill === id ? styles.skillTitleHover : ""
                  }`}
              >
                {skill.title}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
