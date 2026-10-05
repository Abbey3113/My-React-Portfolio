import PageNav from "../Components/PageNav";
import styles from "./Contact.module.css";

function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.contact}>
      <PageNav />
      <header className={styles.intro}>
        <h2>GET IN TOUCH</h2>
        <h1>Contact Me</h1>
        <p>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </header>

      <div className={styles.contactLayout}>
        <ul className={styles.contactDetails}>
          <li>
            <span className={styles.detailIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.detailCopy}>
              <h2>Email</h2>
              <p>abiodunabdul234@gmail.com</p>
            </span>
          </li>
          <li>
            <span className={styles.detailIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </span>
            <span className={styles.detailCopy}>
              <h2>Location</h2>
              <p>Lagos, Nigeria</p>
            </span>
          </li>
        </ul>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/Abbey3113"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.64 10.64 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/abbey_1909/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          <a href="mailto:abiodunabdul234@gmail.com" aria-label="Email">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>

        <form className={styles.form} action="">
          <input type="text" placeholder="Name" aria-label="Name" />
          <input type="text" placeholder="Email" aria-label="Email" />
          <textarea
            name=""
            id=""
            placeholder="Message"
            rows={3}
            aria-label="Message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <footer className={styles.footer}>
        <p> &copy; {currentYear} AbbeyTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Contact;
