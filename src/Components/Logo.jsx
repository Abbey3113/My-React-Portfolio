import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/logo.png" alt="AbbeyTech Logo" />
    </div>
  );
}
export default Logo;
