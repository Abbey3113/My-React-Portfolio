import PageNav from "../Components/PageNav";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <PageNav />
      <h2>ABOUT ME</h2>
      <h1>A little about me</h1>
      <p>
        I'm a frontend developer based in Lagos, Nigeria. I love building simple
        and responsive websites and web applications with React. I'm always
        learning new technologies and improving my skills every day.
      </p>
      <ul>
        <li>
          <h3>Location</h3>
          <p>Lagos, Nigeria</p>
        </li>
        <li>
          <h3>Currently Learning</h3>
          <p>React & Javascript</p>
        </li>
        <li>
          <h3>Interests</h3>
          <p>Anime . Gaming . Coding</p>
        </li>

        <h2>SKILLS</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Git & GitHub</li>
        </ul>
      </ul>
    </div>
  );
}
export default About;
