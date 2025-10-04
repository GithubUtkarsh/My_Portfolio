import React from "react";
import { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.js";

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${hoveredCard === project.id ? styles.projectCardHover : ""
              }`}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={`${styles.projectImage} ${hoveredCard === project.id ? styles.projectImageHover : ""
                  }`}
              />
              <div
                className={`${styles.overlay} ${hoveredCard === project.id ? styles.overlayHover : ""
                  }`}
              >

              </div>
              <div className={styles.categoryBadge}>{project.category}</div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                {project.id !== 3 && (   // 👈 replace 3 with the id you want to hide it for  
                  <a
                    href={project.liveLink}
                    className={`${styles.projectLink} ${hoveredLink === `live-${project.id}` ? styles.projectLinkHover : ""
                      }`}
                    onMouseEnter={() => setHoveredLink(`live-${project.id}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    View Live
                  </a>
                )}
                <a
                  href={project.githubLink}
                  className={`${styles.projectLink} ${hoveredLink === `github-${project.id}`
                    ? styles.projectLinkHover
                    : ""
                    }`}
                  onMouseEnter={() => setHoveredLink(`github-${project.id}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
