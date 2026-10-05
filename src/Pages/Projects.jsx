import PageNav from "../Components/PageNav";
import ProjectCard from "../Components/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description:
        "A simple React task manager for creating and managing daily tasks.",
      image: "/to-do-app.png",
      tech: ["React", "JavaScript", "CSS"],
      demo: "https://to-do-app-flame-one.vercel.app/",
      github: "https://github.com/Abbey3113/To-Do-App",
    },
    {
      title: "Movie App",
      description:
        "A React movie discovery app for exploring movies and viewing their details.",
      image: "/movie-app.png",
      tech: ["React", "JavaScript", "API", "CSS"],
      demo: "https://movie-app-six-nu-49.vercel.app/",
      github: "https://github.com/Abbey3113/Movie-App",
    },
    {
      title: "Drum Kit",
      description:
        "An interactive JavaScript drum kit controlled with keyboard keys and buttons.",
      image: "/drum-kit.png",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://abbey3113.github.io/Drum-Kit/",
      github: "https://github.com/Abbey3113/Drum-Kit",
    },
  ];
  return (
    <div className={styles.projects}>
      <PageNav />
      <h2>MY PROJECTS</h2>
      <h1>Some of my work</h1>
      <p>
        Some of the things I've built while learninmg and growing as a
        developer. Each project helped me improve my skills and bring ideas to
        life.
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
