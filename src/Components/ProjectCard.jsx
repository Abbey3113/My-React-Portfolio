import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.ProjectCard}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
        loading="lazy"
      />
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techList}>
          {project.tech.map((tech) => (
            <span className={styles.techTag} key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectButtons}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoButton}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 4h6v6" />
              <path d="M20 4 11 13" />
              <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
            </svg>
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.64 10.64 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
